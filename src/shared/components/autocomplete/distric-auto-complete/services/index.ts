import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.PERMISSION

    const getAllDistrict = ({id_province}:  {id_province: string}) => {
        return new Promise((resolve, reject) => {
            resolve(fetch(`https://esgoo.net/api-tinhthanh/2/${id_province}.htm`)
                .then(response => response.json()))
        }).then((res) => {
            //@ts-ignore
            return res?.data || [];
        })
    }

    return {
        queryKey,
        getAllDistrict
    }
}

export default useService;