import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { Bank } from "shared/schema/bank"

type UseDetailBankProps = {
    id: string
}

function useDetailBank(props: UseDetailBankProps) {
    const { id } = props
    const { queryKey, getBusinessPartnerBank } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getBusinessPartnerBank(), {
                id,
            }),
    })

    const businessPartnerBank: Bank = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        businessPartnerBank
    }
}
export default useDetailBank
