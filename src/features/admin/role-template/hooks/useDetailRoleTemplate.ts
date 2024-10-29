import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"
import { DeleteUserArguments } from "shared/schema/user"
import useGetResource from "shared/hooks/crud-hook/useGetResource"
import { RoleTemplate } from "shared/schema/role-template"
import { FormDataSchema } from "../shared/constants/schema"
import { useQuery } from "@tanstack/react-query"
import RESTClientService from "services/axios-service"
import { isRight, unwrapEither } from "shared/utils/handleEither"
import { useMemo } from "react"

type UseDetailRoleTemplateProps = {
    id: string
}

function useDetailRoleTemplate(props: UseDetailRoleTemplateProps) {
    const { id } = props
    const { queryKey, getRoleTemplate } = useService()

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () =>
            RESTClientService.fetchREST(getRoleTemplate(), {
                id,
            }),
    })

    const roleTemplate: RoleTemplate = useMemo(() => {
        if (data && isRight(data)) {
            const response = unwrapEither(data)

            return response?.metaData
        }
        return {}
    }, [data])

    return {
        roleTemplate
    }
}
export default useDetailRoleTemplate
