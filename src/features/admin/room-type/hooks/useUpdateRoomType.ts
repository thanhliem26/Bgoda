import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { RoomType, UpdateRoomTypeArguments } from "shared/schema/room-type"

type UseUpdateRoomType = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateRoomType(props: UseUpdateRoomType) {
    const { id, onSuccess } = props
    const { updateRoomType, getAllRoomType, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        RoomType,
        FormDataSchemaUpdate,
        UpdateRoomTypeArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateRoomType,
        oneBuildQuery: getAllRoomType,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues() {

            return {
                id: id,
                name: '',
                description: ''
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const isValid = !formState.isValid || !formState.isDirty
    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {
            console.log("🚀 ~ value:", value)

            mutate(value as UpdateRoomTypeArguments)
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

export default useUpdateRoomType
