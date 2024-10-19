import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import { BaseRecord } from 'shared/interfaces/common'
import { ISearchData } from '../interfaces'
import RESTClientService, { IRequestReturn } from 'services/axios-service'
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
  handleChangePage: (page: number) => void
  handleChangePerPage: (perPage: number) => void
  handleSorTable: (id: string) => void
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
        ...variables
      }
    ),
  })

  const { sortData, status, totalRecord } = useMemo(() => {
    if (data && isRight(data)) {
      const response = unwrapEither(data)

      const status = response?.status;
      const totalRecord = response?.metadata?.count;
      const sortData = response?.metadata?.rows;

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

  function handleChangePage(page: number) {
    setPagination((prev) => ({ ...prev, page: page }))
  }

  function handleChangePerPage(perPage: number) {
    setPagination((prev) => ({
      ...prev,
      perPage: perPage,
    }))
  }


  function handleSorTable(id: string) {
    const sortDefault = orderBy?.field ? orderBy?.field : 'created_at'
    setPagination((prev) => {
      if (id === prev.orderBy.field) {
        const isDescending = prev.orderBy.direction === 'DESC'
        const fieldSort = isDescending ? orderBy?.field || sortDefault : id
        let directionSort =
          fieldSort === sortDefault
            ? prev.orderBy.field === sortDefault
              ? prev.orderBy.direction === 'ASC'
                ? 'DESC'
                : 'ASC'
              : 'DESC'
            : prev.orderBy.direction === 'ASC'
              ? 'DESC'
              : 'ASC'

        const sortBy = {
          direction: directionSort,
          field: fieldSort,
        } as ISorting
        return {
          ...prev,
          orderBy: sortBy,
        }
      }

      return {
        ...prev,
        orderBy: {
          direction: 'ASC',
          field: id,
        },
      }
    })
  }

  // useEffect(() => {
  //   if (isEmpty(sortData) && pagination.page > 1 && !isLoading) {
  //     handleChangePage(pagination.page - 1)
  //   }
  // }, [sortData, pagination, isLoading])

  return {
    isLoading,
    error,
    sortData,
    handleChangePage,
    handleSorTable,
    status,
    handleChangePerPage,
    refetch,
    totalRecord,
    variables: {
      pagination: pagination,
      sortBy: pagination.orderBy,
    },
  }
}

export default useCustomTable
