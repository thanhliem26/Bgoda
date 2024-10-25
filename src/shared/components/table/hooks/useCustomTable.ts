import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import { BaseRecord, SortTypeTable } from 'shared/interfaces/common'
import { ISearchData } from '../interfaces'
import RESTClientService, { IRequestReturn } from 'services/axios-service'
import { isEmpty } from 'lodash'
interface IuseCustomTable {
  buildQuery: () => IRequestReturn
  search?: ISearchData
  filters?: BaseRecord
  queryKey: string
  perPage?: number
  orderBy?: ISorting
  variables?: BaseRecord
}

export interface IPagination {
  page: number
  perPage: number
  orderBy: ISorting
  state: 'INIT' | 'RUNNING'
}

interface ISorting {
  direction: 'ASC' | 'DESC'
  field: string
}

export interface IuseCustomTableReturn {
  isLoading: boolean
  error: Error | null
  sortData: any[]
  handleChangePagination: (page: number, perPage: number) => void
  handleSorTable: (field: string, sort_type: SortTypeTable) => void
  status: number
  totalRecord: number
  refetch: () => void
  variables: {
    pagination: IPagination
    sortBy: ISorting
  }
}
const useCustomTable = ({
  buildQuery,
  filters,
  perPage = 10,
  search,
  queryKey,
  orderBy,
  variables
}: IuseCustomTable): IuseCustomTableReturn => {
  const [pagination, setPagination] = useState<IPagination>({
    orderBy: orderBy || {
      direction: 'DESC',
      field: 'created_at',
    },
    page: 1,
    perPage: perPage,
    state: 'INIT',
  })

  const customKey = {
    pagination,
    filters,
    search,
  }
  const queryString = buildQuery();
  const { isLoading, error, data, refetch } = useQuery({
    gcTime: 0,
    queryKey: [queryKey, customKey],
    queryFn: async () =>
      RESTClientService.fetchREST(queryString
        , {
        // orderBy: {
        //   ...pagination.orderBy,
        // },
        // filter: filters,
        // freeWord: search,
        // pagination: {
        //   page: pagination.page,
        //   perPage: pagination.perPage,
        // },
        // ...variables
        ...search,
        page: pagination.page,
        perPage: pagination.perPage,
      }
    ),
  })

  const { sortData, status, totalRecord } = useMemo(() => {
    if (data && isRight(data)) {
      const response = unwrapEither(data)

      const status = response?.status;
      const totalRecord = response?.options?.totalRecords;
      const sortData = response?.metaData as any[]

      return {
        status: status,
        sortData,
        totalRecord: totalRecord,
      }
    }
    return {
      sortData: [],
      status: 200,
      totalRecord: 0,
    }
  }, [data, queryString.url, pagination])

  function handleChangePagination(page: number, perPage: number) {
    setPagination((prev) =>(
      {
        ...prev,
        page,
        perPage
      }
    ))
  }


  function handleSorTable(field: string, sort_type: SortTypeTable) {
  console.log("🚀 ~ field:", field, sort_type)

  }

  useEffect(() => {
    if (isEmpty(sortData) && pagination.page > 1 && !isLoading) {
      handleChangePagination(pagination.page - 1, pagination.perPage)
    }
  }, [sortData, pagination, isLoading])

  return {
    isLoading,
    error,
    sortData,
    handleSorTable,
    status,
    handleChangePagination,
    refetch,
    totalRecord,
    variables: {
      pagination: pagination,
      sortBy: pagination.orderBy,
    },
  }
}

export default useCustomTable
