import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.APPLICATION_INFO_ROOM

    const getListRoomInfo = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms',
            method: 'GET',
            slash_id: true
        })
    }

    return {
        queryKey,
        getListRoomInfo
    }
}

export default useService;