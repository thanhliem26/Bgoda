import { BaseRecord, MODLUE_QUERY_KEY } from "shared/interfaces/common"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { UpdateUserInfoArguments, User } from "shared/schema/user"
import { FormDataSchemaUpdate, schemaUpdate } from "layouts/shared/constants/schema"
import useService from "layouts/services"

type UseUpdateUser = {
    onSuccess: (data: BaseRecord) => void
}

function useUpdateUser(props: UseUpdateUser) {
    const { onSuccess } = props
    const { updateUser, getUserDetail } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        User,
        FormDataSchemaUpdate,
        UpdateUserInfoArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateUser,
        oneBuildQuery: getUserDetail,
        queryKey: [MODLUE_QUERY_KEY.APPLICATION_INFO_USER],
        id: '',
        onSuccess,
        formatDefaultValues(data) {

            return {
                fullName: data?.name ?? '',
                address: data?.address ?? '',
                avatar: data?.avatar ?? '',
                dob: data?.dob ?? null,
                gender: data?.gender ?? '',
                phoneNumber: data?.phoneNumber ?? '',
                id: data?.id ?? '',
                email: data?.email ?? ''
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: UpdateUserInfoArguments = {
                address: value?.address ?? '',
                avatar: value?.avatar ?? '',
                dob: value?.dob ?? null,
                fullName: value?.fullName ?? '',
                gender: value?.gender ?? '',
                phoneNumber: value?.phoneNumber ?? '',
            }

            mutate(payload)
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
