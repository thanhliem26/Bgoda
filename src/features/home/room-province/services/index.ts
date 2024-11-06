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

    const getListRoomByProvince = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms',
            method: 'POST',
        })
    }

    const getRangePrice = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/application/rooms/price-range',
            method: 'GET',
        })
    }

    const getAllDistrict = ({id_province}:  {id_province: string}) => {
        return new Promise((resolve) => {
            resolve(fetch(`https://esgoo.net/api-tinhthanh/2/${id_province}.htm`)
                .then(response => response.json()))
        }).then((res) => {
            //@ts-ignore
            return res?.data || [];
        })
    }

    return {
        queryKey,
        getAllRoomType,
        getListSuggest,
        getListProvince,
        getListRoomByProvince,
        getRangePrice,
        getAllDistrict
    }
}

export default useService;