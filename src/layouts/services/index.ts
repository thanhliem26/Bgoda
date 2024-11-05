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

    const updateUser = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/accounts',
            method: 'PUT',
        })
    }

    const updatePassword = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/accounts/update-password',
            method: 'POST',
        })
    }

    const getUserDetail = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/accounts/info',
            method: 'GET',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllBusinessPartner,
        updateUser,
        getUserDetail,
        updatePassword
    }
}

export default useService;

