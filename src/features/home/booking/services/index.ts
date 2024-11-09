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

    return {
        queryKey,
        createBooking,
        getRoomInfo,
        getDiscountRoom
    }
}

export default useService;