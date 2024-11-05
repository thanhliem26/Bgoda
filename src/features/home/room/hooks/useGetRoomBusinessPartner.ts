import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Room } from 'shared/schema/room'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

interface IUseGetRoomBusinessPartnerProps {
    id: string | number
}


const useGetRoomBusinessPartner = ({ id }: IUseGetRoomBusinessPartnerProps) => {
    const { getListRoomBusinessPartner } = useService()

    const { data } = useQuery({
        queryKey: [MODLUE_QUERY_KEY.APPLICATION_ROOM_BUSINESS_PARTNER, id],
        enabled: !!id,
        queryFn: async () =>
            RESTClientService.fetchREST(getListRoomBusinessPartner(), {businessPartnerId: id}),
    })

    const roomBusinessPartner: Room[] = useMemo(() => {
        if (data && isRight(data)) {
            const { metaData } = unwrapEither(data);
            return metaData
        }
        return []
    }, [data])

    return {
        roomBusinessPartner: roomBusinessPartner,
    }
}

export default useGetRoomBusinessPartner
