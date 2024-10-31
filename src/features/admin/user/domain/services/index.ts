import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_USER

    const getAllUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/tourists',
            method: 'GET',
        })
    }

    const createUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/access/signup',
            method: 'POST',
        })
    }

    const updateUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/tourists',
            method: 'PUT',
        })
    }

    const getUserDetail = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/tourists',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/tourists',
            method: 'DELETE',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllUser,
        createUser,
        updateUser,
        getUserDetail,
        deleteUser
    }
}

export default useService;