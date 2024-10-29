import useService from "../domain/services"
import { RoleTemplate } from "shared/schema/role-template"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { RoomType } from "shared/schema/room-type"

type UseDetailRoomTypeProps = {
    id: string
}

function useDetailRoomType(props: UseDetailRoomTypeProps) {
    const { id } = props
    const { queryKey, getRoomType } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getRoomType(), {
                id,
            }),
    })

    const roomType: RoomType = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        roomType
    }
}
export default useDetailRoomType
