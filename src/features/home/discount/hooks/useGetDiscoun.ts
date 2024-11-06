import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Discount } from 'shared/schema/discount'

interface IUseGetDiscountRoom {
  id: string
}
const useGetDiscountRoom = ({id}: IUseGetDiscountRoom) => {
  const { getDiscountInfo } = useService()

  const { data } = useQuery({
    queryKey: ['get-discount-info'],
    queryFn: async () =>
      RESTClientService.fetchREST(getDiscountInfo(), {id}),
  })

  const discountInfo: Discount = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    discountInfo: discountInfo,
  }
}

export default useGetDiscountRoom
