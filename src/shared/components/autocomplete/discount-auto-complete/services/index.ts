import RESTClientService from 'services/axios-service'

const useService = () => {
    const queryKey = 'select_all_discount'

    const getAllDiscount = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllDiscount
    }
}

export default useService;