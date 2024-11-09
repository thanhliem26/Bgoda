import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Discount } from 'shared/schema/discount'

interface IUseGetDiscountRoomProps {
    id: string | number
}

const useGetDiscountRoom = ({ id }: IUseGetDiscountRoomProps) => {
    const { getDiscountRoom } = useService()

    const { data } = useQuery({
        queryKey: ['discount-room', id],
        enabled: !!id,
        queryFn: async () =>
            RESTClientService.fetchREST(getDiscountRoom(), {roomId: id}),
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

export default useGetDiscountRoom
