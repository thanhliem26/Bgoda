import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_ME

    const getInfo = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/get-info',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getInfo
    }
}

export default useService;