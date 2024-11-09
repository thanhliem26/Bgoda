import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service'
import { BaseRecord } from 'shared/interfaces/common'
import { capitalizeFirstLetter } from 'shared/utils/convert-string'

const useGetOptions = () => {
  const { getAllDiscount, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllDiscount(), {page: 1, perPage: 1000}),
  })

  const permissions: BaseRecord[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return permissions.map((item) => ( {label: capitalizeFirstLetter(item?.name), value: item?.id}))
  }, [permissions])

  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
