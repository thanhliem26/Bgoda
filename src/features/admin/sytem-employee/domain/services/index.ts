import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_SYSTEM_EMPLOYEE

    const getAllEmployee = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/system-employees',
            method: 'GET',
        })
    }

    const createEmployee = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/employees',
            method: 'POST',
        })
    }

    const updateEmployee = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/system-employees',
            method: 'PUT',
        })
    }

    const getEmployee = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/system-employees',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteEmployee = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/employees',
            method: 'DELETE',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllEmployee,
        createEmployee,
        updateEmployee,
        getEmployee,
        deleteEmployee
    }
}

export default useService;