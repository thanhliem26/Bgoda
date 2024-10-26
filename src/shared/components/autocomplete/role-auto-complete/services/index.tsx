import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_BUSINESS_PARTNER

    const getAllRole = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/roles/get-all',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllRole
    }
}

export default useService;