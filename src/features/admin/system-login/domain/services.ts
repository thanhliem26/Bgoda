import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.LOGIN_USER

    const loginUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/login-via-form',
            method: 'POST',
        })
    }
    
    return {
        queryKey,
        loginUser,
    }
}

export default useService;