import RESTClientService from 'services/axios-service'

const useService = () => {
    const queryKey = 'select_bank'

    const getAllBank = () => {
        return RESTClientService.buildRequest({
            endpoint: '/api/admin/banks/get-all',
            method: 'GET',
        })
    }

    return {
        queryKey,
        getAllBank
    }
}

export default useService;