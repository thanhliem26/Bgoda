import { BaseRecord, MODLUE_QUERY_KEY } from "shared/interfaces/common"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { UpdatePasswordTouristArguments, User } from "shared/schema/user"
import { FormDataSchemaUpdatePassword, schemaUpdatePassword } from "layouts/shared/constants/schema"
import useService from "layouts/services"

type TypeUseUpdatePassword = {
    onSuccess: (data: BaseRecord) => void
}

function useUpdatePassword(props: TypeUseUpdatePassword) {
    const { onSuccess } = props
    const { updatePassword, getUserDetail } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        User,
        FormDataSchemaUpdatePassword,
        UpdatePasswordTouristArguments
    >({
        resolver: yupResolver(schemaUpdatePassword),
        editBuildQuery: updatePassword,
        oneBuildQuery: getUserDetail,
        queryKey: [MODLUE_QUERY_KEY.APPLICATION_INFO_USER],
        id: '',
        onSuccess,
        formatDefaultValues() {

            return {
                newPassword: '',
                oldPassword: '',
                reNewPassword: ''
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidField = !isValid || !isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: UpdatePasswordTouristArguments = {
                newPassword: value?.newPassword,
                oldPassword: value?.oldPassword
            }

            mutate(payload)
        })()
    }

    return {
        control,
        isValid: isValidField,
        isPending,
        onSubmit,
        formState,
        setValue,
        isGetting,
    }
}

export default useUpdatePassword
