import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Booking } from 'shared/schema/booking'


const useGetBooked = () => {
    const { getRoomBooked, queryKey } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getRoomBooked(), {page: 1, perPage: 1000}),
    })

    const roomBooked: Booking[] = useMemo(() => {
        if (data && isRight(data)) {
            const { metaData } = unwrapEither(data);
            return metaData
        }
        return []
    }, [data])

    return {
        roomBooked: roomBooked,
    }
}

export default useGetBooked
