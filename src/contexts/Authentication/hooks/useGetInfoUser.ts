import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service-application"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import useService from "../services"
import { User } from "shared/schema/user"

type UseDetailBusinessPartnerProps = {
    authenticate: boolean
}

function useDetailBusinessPartner(props: UseDetailBusinessPartnerProps) {
    const { authenticate } = props
    const { queryKey, getUserDetail } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        enabled: authenticate,
        queryFn: async () =>
            RESTClientService.fetchREST(getUserDetail()),
    })

    const userInfo: User = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        userInfo
    }
}
export default useDetailBusinessPartner
