import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_BUSINESS_PARTNER

    const getAllBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/ui/business-partner',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllBusinessPartner
    }
}

export default useService;