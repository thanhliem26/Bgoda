import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_BOOKING

    const getAllBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/bookings',
            method: 'GET',
        })
    }

    const createBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/Booking-coupons',
            method: 'POST',
        })
    }

    const updateReceiveBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/bookings/received',
            method: 'POST',
        })
    }

    const getBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/bookings',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteBooking = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/bookings',
            method: 'DELETE',
        })
    }


    return {
        queryKey,
        getAllBooking,
        createBooking,
        updateReceiveBooking,
        getBooking,
        deleteBooking,
    }
}

export default useService;