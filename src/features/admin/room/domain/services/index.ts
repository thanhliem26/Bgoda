import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_ROOM

    const getAllRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms',
            method: 'GET',
        })
    }

    const createRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms',
            method: 'POST',
        })
    }

    const updateRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms',
            method: 'PUT',
        })
    }

    const getRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/rooms',
            method: 'DELETE',
        })
    }

    return {
        queryKey,
        getAllRoom,
        createRoom,
        updateRoom,
        getRoom,
        deleteRoom
    }
}

export default useService;