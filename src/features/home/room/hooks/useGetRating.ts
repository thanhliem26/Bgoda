import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'
import { Rating } from 'shared/schema/rating'

interface IUseGetRatingProps {
    id: string | number
}

const useGetRating = ({ id }: IUseGetRatingProps) => {
    const { getAllRating } = useService()

    const { data } = useQuery({
        queryKey: [MODLUE_QUERY_KEY.APPLICATION_RATING],
        enabled: !!id,
        queryFn: async () =>
            RESTClientService.fetchREST(getAllRating(), {roomId: id}),
    })

    const ratingList: Rating[] = useMemo(() => {
        if (data && isRight(data)) {
            const { metaData } = unwrapEither(data);
            return metaData
        }
        return []
    }, [data])

    return {
        ratingList: ratingList,
    }
}

export default useGetRating