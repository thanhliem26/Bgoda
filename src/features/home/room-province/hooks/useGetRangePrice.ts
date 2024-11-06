import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'

interface IRangePrice {
    min: number
    max: number
}
const useGetRangePrice = () => {
  const { getRangePrice } = useService()

  const { data } = useQuery({
    queryKey: ['get-range-price'],
    queryFn: async () =>
      RESTClientService.fetchREST(getRangePrice()),
  })

  const rangePrice: IRangePrice = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    rangePrice: rangePrice,
  }
}

export default useGetRangePrice
