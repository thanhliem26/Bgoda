import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { UpdateTouristArguments, User } from "shared/schema/user"

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
        UpdateTouristArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateUser,
        oneBuildQuery: getUserDetail,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                email: data?.email ?? '',
                fullName: data?.name ?? '',
                address: data?.address ?? '',
                avatar: data?.avatar ?? '',
                dob: data?.dob ?? null,
                gender: data?.gender ?? '',
                phoneNumber: data?.phoneNumber ?? '',
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: UpdateTouristArguments = {
                id: id as string,
                address: value?.address ?? '',
                avatar: value?.avatar ?? '',
                dob: value?.dob ?? null,
                email: value?.email ?? '',
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
