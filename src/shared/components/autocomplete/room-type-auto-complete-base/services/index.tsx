import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_ROOM_TYPE

    const getAllRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types/get-all',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllRoomType
    }
}

export default useService;