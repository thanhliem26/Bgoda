import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { Discount } from 'shared/schema/discount'
import { convertCurrency } from 'shared/utils/convert-string'

const useGetOptions = ({ id }: { id: string | number }) => {
  const { getDiscountRoom, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getDiscountRoom(), { roomId: id }),
  })

  const partners: Discount[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data)
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return partners.map((item) => {
      return {
        label: <FlexBox style={{flexDirection: 'column'}}>
          <Span>{item?.name}</Span>
          {item?.discountType === 0 ?  <Tiny>Giảm: {convertCurrency(item?.discountValue)} VND</Tiny> :  <Tiny>
            Giảm: {item?.discountValue}%. Tối đa: {convertCurrency(item?.discountMax)} VND</Tiny>}
         
        </FlexBox>,
        displayLabel: item?.name,
        value: item?.id,
      }
    })
  }, [partners])

  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
