import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ROLE_TEMPLATE

    const getAllBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/business-partner-banks',
            method: 'GET',
        })
    }

    const createBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/business-partner-banks',
            method: 'POST',
        })
    }

    const updateBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/business-partner-banks',
            method: 'PUT',
        })
    }

    const getBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/business-partner-banks',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/business-partner-banks',
            method: 'DELETE',
            slash_id: true
        })
    }

    return {
        queryKey,
        getAllBusinessPartnerBank,
        createBusinessPartnerBank,
        updateBusinessPartnerBank,
        getBusinessPartnerBank,
        deleteBusinessPartnerBank
    }
}

export default useService;