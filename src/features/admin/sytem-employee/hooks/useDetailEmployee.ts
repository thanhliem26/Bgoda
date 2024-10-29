import useService from "../domain/services"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"
import { Employee } from "shared/schema/system-empoyee"

type UseDetailEmployeeProps = {
    id: string
}

function useDetailEmployee(props: UseDetailEmployeeProps) {
    const { id } = props
    const { queryKey, getEmployee } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getEmployee(), {
                id,
            }),
    })

    const employee: Employee = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        employee
    }
}
export default useDetailEmployee
