import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_USER

    const createUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/accounts/register',
            method: 'POST',
        })
    }
    
    return {
        queryKey,
        createUser,
    }
}

export default useService;