import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Discount } from 'shared/schema/discount'

const useGetDiscount = () => {
  const { getDiscountList } = useService()

  const { data } = useQuery({
    queryKey: ['get-discount-list'],
    queryFn: async () =>
      RESTClientService.fetchREST(getDiscountList(), {
        page: 1,
        perPage: 8
      }),
  })

  const discountList: Discount[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    discountList: discountList,
  }
}

export default useGetDiscount
