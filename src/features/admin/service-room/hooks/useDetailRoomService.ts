import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { ServiceRoom } from "shared/schema/service-room"

type UseDetailRoomServiceProps = {
    id: string
}

function useDetailRoomService(props: UseDetailRoomServiceProps) {
    const { id } = props
    const { queryKey, getServiceRoom } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getServiceRoom(), {
                id,
            }),
    })

    const roomService: ServiceRoom = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        roomService
    }
}
export default useDetailRoomService
