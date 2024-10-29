import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { BusinessPartner } from "shared/schema/business-partner"

type UseDetailBusinessPartnerProps = {
    id: string
}

function useDetailBusinessPartner(props: UseDetailBusinessPartnerProps) {
    const { id } = props
    const { queryKey, getBusinessPartner } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getBusinessPartner(), {
                id,
            }),
    })

    const businessPartner: BusinessPartner = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        businessPartner
    }
}
export default useDetailBusinessPartner
