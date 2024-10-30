import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import useService from "../services"

interface InfoMe {
    name:  string
    permission: string[]
}
function useGetMe() {
    const { queryKey,  getInfo} = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getInfo()),
    })

    const information: InfoMe = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        information
    }
}
export default useGetMe
