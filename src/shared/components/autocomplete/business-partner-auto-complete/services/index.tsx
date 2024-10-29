import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_BUSINESS_PARTNER

    const getAllBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/business-partners',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllBusinessPartner
    }
}

export default useService;