import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { Discount } from "shared/schema/discount"
import { Booking } from "shared/schema/booking"

type UseDetailBookingProps = {
    id: string
}

function useDetailBooking(props: UseDetailBookingProps) {
    const { id } = props
    const { queryKey, getBooking } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getBooking(), {
                id,
            }),
    })

    const booking: Booking = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        booking
    }
}
export default useDetailBooking
