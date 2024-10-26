import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/business-partners',
            method: 'GET',
        })
    }

    const createBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/business-partners',
            method: 'POST',
        })
    }

    const updateBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/business-partners',
            method: 'PUT',
        })
    }

    const getBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/accounts/business-partners',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: 'api/admin/accounts/business-partner',
            method: 'DELETE',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllBusinessPartner,
        createBusinessPartner,
        updateBusinessPartner,
        getBusinessPartner,
        deleteBusinessPartner
    }
}

export default useService;