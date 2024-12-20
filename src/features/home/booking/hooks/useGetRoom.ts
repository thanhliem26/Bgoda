import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Room } from 'shared/schema/room'

interface IUseGetInfoRoomProps {
    id: string | number
}

const useGetInfoRoom = ({ id }: IUseGetInfoRoomProps) => {
    const { getRoomInfo, queryKey } = useService()

    const { data } = useQuery({
        queryKey: [queryKey, id],
        enabled: !!id,
        queryFn: async () =>
            RESTClientService.fetchREST(getRoomInfo(), {id: id}),
    })

    const roomInfo: Room = useMemo(() => {
        if (data && isRight(data)) {
            const { metaData } = unwrapEither(data);
            return metaData
        }
        return []
    }, [data])

    return {
        roomInfo: roomInfo,
    }
}

export default useGetInfoRoom
