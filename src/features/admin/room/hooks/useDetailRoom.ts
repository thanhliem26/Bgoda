import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { BusinessPartner } from "shared/schema/business-partner"
import { Room } from "shared/schema/room"

type UseDetailRoomProps = {
    id: string
}

function useDetailRoom(props: UseDetailRoomProps) {
    const { id } = props
    const { queryKey, getRoom } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getRoom(), {
                id,
            }),
    })

    const room: Room = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        room
    }
}
export default useDetailRoom
