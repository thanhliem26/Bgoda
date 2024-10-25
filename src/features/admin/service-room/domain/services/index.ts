import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'GET',
        })
    }

    const createRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/room-type',
            method: 'POST',
        })
    }

    const updateRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/room-type',
            method: 'PUT',
        })
    }

    const getRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/room-type',
            method: 'GET',
        })
    }

    const deleteRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/room-type',
            method: 'DELETE',
        })
    }

    return {
        queryKey,
        getAllRoomType,
        createRoomType,
        updateRoomType,
        getRoomType,
        deleteRoomType
    }
}

export default useService;