import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_DISCOUNT

    const getAllDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'GET',
        })
    }

    const createDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'POST',
        })
    }

    const updateDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'PUT',
        })
    }

    const getDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'DELETE',
        })
    }

    const getAllRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons/get-rooms',
            method: 'GET',
        })
    }


    return {
        queryKey,
        getAllDiscount,
        createDiscount,
        updateDiscount,
        getDiscount,
        deleteDiscount,
        getAllRoom
    }
}

export default useService;