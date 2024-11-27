import envConfig from 'configs/env'
import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_BOOKING

    const createBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/bookings/create-book',
            method: 'POST',
        })
    }

    const getRoomInfo = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms',
            method: 'GET',
            slash_id: true
        })
    }

    const getDiscountRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/discount-coupons/use-able-coupon/',
            method: 'GET',
        })
    }

    const getBusinessPartnerBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/v1/api/bank-business-partner/bank',
            method: 'GET',
            options: {
                baseURL: envConfig.ENDPOINT_API_NODE
            }
        })
    }

    return {
        queryKey,
        createBooking,
        getRoomInfo,
        getDiscountRoom,
        getBusinessPartnerBank
    }
}

export default useService;