import RESTClientService from 'services/axios-service'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.ADMIN_RATING

    const getAllRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/ratings',
            method: 'GET',
        })
    }

    const updateApproveRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/ratings/approve',
            method: 'POST',
        })
    }

    const updateUnApproveRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/ratings/un-approve',
            method: 'POST',
        })
    }

    const getRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/ratings/approve',
            method: 'GET',
            slash_id: true
        })
    }

    const deleteRating = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/Ratings',
            method: 'DELETE',
        })
    }


    return {
        queryKey,
        getAllRating,
        updateApproveRating,
        updateUnApproveRating,
        getRating,
        deleteRating,
    }
}

export default useService;