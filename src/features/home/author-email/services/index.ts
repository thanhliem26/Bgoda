import envConfig from 'configs/env'
import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ACTIVE_EMAIL

    const activeEmail = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/access/active-email',
            method: 'POST',
            options: {
                baseURL: envConfig.ENDPOINT_API_NODE
            }
        })
    }

    return {
        queryKey,
        activeEmail,
    }
}

export default useService;