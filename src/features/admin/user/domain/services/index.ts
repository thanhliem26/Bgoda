import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_USER

    const getAllUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/news/list',
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
            endpoint: '/v1/api/user/update',
            method: 'PUT',
        })
    }

    const getUserDetail = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/product',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/user/delete',
            method: 'PUT',
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