import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { ServiceRoom, UpdateServiceRoomArguments } from "shared/schema/service-room"

type UseUpdateServiceRoom = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateServiceRoom(props: UseUpdateServiceRoom) {
    const { id, onSuccess } = props
    const { updateServiceRoom, getServiceRoom, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        ServiceRoom,
        FormDataSchemaUpdate,
        UpdateServiceRoomArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateServiceRoom,
        oneBuildQuery: getServiceRoom,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                id: id,
                name: data?.name ?? '',
                description: data?.description ?? '',
                icon: data?.icon ?? ''
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            mutate(value as UpdateServiceRoomArguments)
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

export default useUpdateServiceRoom
