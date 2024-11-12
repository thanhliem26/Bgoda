import RESTClientService from 'services/axios-service-application'

const useService = () => {
    const queryKey = 'discount_room_autocomplete'

    const getDiscountRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/discount-coupons/use-able-coupon/',
            method: 'GET',
        })
    }


    return {
        queryKey,
        getDiscountRoom
    }
}

export default useService;