import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllRoleTemplate = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'GET',
        })
    }

    const createRoleTemplate = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'POST',
        })
    }

    const updateRoleTemplate = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'PUT',
        })
    }

    const getRoleTemplate = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteRoleTemplate = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles',
            method: 'DELETE',
        })
    }

    return {
        queryKey,
        getAllRoleTemplate,
        createRoleTemplate,
        updateRoleTemplate,
        getRoleTemplate,
        deleteRoleTemplate
    }
}

export default useService;