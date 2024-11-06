import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_LIST_DISCOUNT

    const getDiscountInfo = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/discount-coupons',
            method: 'GET',
            slash_id: true
        })
    }

    const getRoomByDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/discount-coupons/use-able-room',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getDiscountInfo,
        getRoomByDiscount
    }
}

export default useService;