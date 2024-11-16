import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_RATING

    const getListRoomInfo = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms',
            method: 'GET',
            slash_id: true
        })
    }

    const getListRoomBusinessPartner = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms/related-room',
            method: 'GET'
        })
    }

    const createRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/ratings',
            method: 'POST'
        })
    }

    const getAllRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/ratings',
            method: 'GET'
        })
    }

    const updateRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/ratings',
            method: 'PUT'
        })
    }

    return {
        queryKey,
        getListRoomInfo,
        getListRoomBusinessPartner,
        createRating,
        getAllRating,
        updateRating
    }
}

export default useService;