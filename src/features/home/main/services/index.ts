import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_ROOM_TYPE

    const getAllRoomType = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms/roomType/get-all',
            method: 'GET',
        })
    }

    const getListSuggest = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/search/suggest-result',
            method: 'GET',
        })
    }

    const getListProvince = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/ui/get-province',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllRoomType,
        getListSuggest,
        getListProvince
    }
}

export default useService;