import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.PERMISSION

    const getAllPermission = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles/permission',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllPermission
    }
}

export default useService;