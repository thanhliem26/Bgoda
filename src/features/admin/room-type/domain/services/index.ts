import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types',
            method: 'GET',
        })
    }

    const createRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types',
            method: 'POST',
        })
    }

    const updateRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types',
            method: 'PUT',
        })
    }

    const getRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms/room-types',
            method: 'DELETE',
            slash_id: true
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