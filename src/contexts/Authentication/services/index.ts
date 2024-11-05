import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_INFO_USER

    const getUserDetail = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/accounts/info',
            method: 'GET',
            slash_id: true
        })
    }

    return {
        queryKey,
        getUserDetail
    }
}

export default useService;

