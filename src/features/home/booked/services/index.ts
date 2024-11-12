import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_BOOKED

    const getRoomBooked = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/bookings',
            method: 'GET',
            slash_id: true
        })
    }


    return {
        queryKey,
        getRoomBooked,
    }
}

export default useService;