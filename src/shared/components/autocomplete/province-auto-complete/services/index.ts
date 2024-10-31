import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.PERMISSION

    const getAllProvince = () => {
        return new Promise((resolve) => {
            resolve(fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
                .then(response => response.json()))
        }).then((res) => {
            //@ts-ignore
            return res?.data || [];
        })
    }

    return {
        queryKey,
        getAllProvince
    }
}

export default useService;