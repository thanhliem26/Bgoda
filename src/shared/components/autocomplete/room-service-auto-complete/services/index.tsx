import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_ROOM_SERVICE

    const getAllRoomService = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services/get-all',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllRoomService
    }
}

export default useService;