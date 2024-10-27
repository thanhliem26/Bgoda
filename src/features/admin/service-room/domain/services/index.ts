import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllServiceRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services',
            method: 'GET',
        })
    }

    const createServiceRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services',
            method: 'POST',
        })
    }

    const updateServiceRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services',
            method: 'PUT',
        })
    }

    const getServiceRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteServiceRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/services',
            method: 'DELETE',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllServiceRoom,
        createServiceRoom,
        updateServiceRoom,
        getServiceRoom,
        deleteServiceRoom
    }
}

export default useService;