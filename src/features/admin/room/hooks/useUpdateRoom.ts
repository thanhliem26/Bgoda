import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { Room, UpdateRoomArguments } from "shared/schema/room"

type UseUpdateRoomModal = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateRoomModal(props: UseUpdateRoomModal) {
    const { id, onSuccess } = props
    const { updateRoom, getRoom, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Room,
        FormDataSchemaUpdate,
        UpdateRoomArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateRoom,
        oneBuildQuery: getRoom,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {
            return {
                commune: data?.commune ?? '',
                description: data?.description ?? '',
                discount: data?.discount ?? null,
                district: data?.district ?? '',
                map: data?.map ?? '',
                name: data?.name ?? '',
                price: data?.price ?? null,
                province: data?.province ?? '',
                services: data?.services ?? [],
                partner_id: data?.partner_id ?? 0,
                roomTypeId: data?.roomTypeId ?? 0,
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateRoomArguments = {
                commune: value.commune,
                description: value.description ?? '',
                discount: value.discount ?? 0,
                district: value.district,
                map: value?.map ?? '',
                name: value?.name,
                price: value?.price ?? 0,
                province: value?.province,
                services: value?.services,
                partner_id: value?.partner_id,
                roomTypeId: value?.roomTypeId
              }

            mutate(payload)
        })()
    }

    return {
        control,
        isValid: isValidUpdate,
        isPending,
        onSubmit,
        formState,
        setValue,
        isGetting,
        watch
    }
}

export default useUpdateRoomModal
