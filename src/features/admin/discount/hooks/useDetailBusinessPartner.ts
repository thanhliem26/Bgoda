import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { Discount } from "shared/schema/discount"

type UseDetailDiscountProps = {
    id: string
}

function useDetailDiscount(props: UseDetailDiscountProps) {
    const { id } = props
    const { queryKey, getDiscount } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getDiscount(), {
                id,
            }),
    })

    const discount: Discount = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        discount
    }
}
export default useDetailDiscount
