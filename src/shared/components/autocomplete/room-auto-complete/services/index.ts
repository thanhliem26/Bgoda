import RESTClientService from 'services/axios-service'

const useService = () => {
    const queryKey = 'select_all_room'

    const getAllRoom = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/discount-coupons/get-rooms',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllRoom
    }
}

export default useService;