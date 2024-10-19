import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { UpdateUserArguments, User } from "shared/schema/user"

type UseUpdateUser = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateUser(props: UseUpdateUser) {
    const { id, onSuccess } = props
    const { updateUser, getUserDetail, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        User,
        FormDataSchemaUpdate,
        UpdateUserArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateUser,
        oneBuildQuery: getUserDetail,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                email: 'teset',
                password: 'ok'
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            console.log("🚀 ~ value:", value)

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

export default useUpdateUser
