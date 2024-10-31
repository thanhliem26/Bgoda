import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

const useService = () => {
    const queryKey = MODLUE_QUERY_KEY.PERMISSION

    const getAllCommune = ({id_district}:  {id_district: string}) => {
        return new Promise((resolve) => {
            resolve(fetch(`https://esgoo.net/api-tinhthanh/3/${id_district}.htm`)
                .then(response => response.json()))
        }).then((res) => {
            //@ts-ignore
            return res?.data || [];
        })
    }

    return {
        queryKey,
        getAllCommune
    }
}

export default useService;