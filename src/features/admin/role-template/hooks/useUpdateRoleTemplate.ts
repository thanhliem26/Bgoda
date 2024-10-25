import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { RoleTemplate, UpdateRoleTemplateArguments } from "shared/schema/role-template"

type UseUpdateRoleTemplate = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateRoleTemplate(props: UseUpdateRoleTemplate) {
    const { id, onSuccess } = props
    const { updateRoleTemplate, getRoleTemplate, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        RoleTemplate,
        FormDataSchemaUpdate,
        UpdateRoleTemplateArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateRoleTemplate,
        oneBuildQuery: getRoleTemplate,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {
        console.log("🚀 ~ data:", data?.permission)

            return {
                id: data?.id,
                name: data?.name ?? '',
                permission: data?.permission ?? []
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            mutate(value)
        })()
    }

    return {
        control,
        isValid,
        isPending,
        onSubmit,
        formState,
        setValue,
        isGetting,
    }
}

export default useUpdateRoleTemplate
