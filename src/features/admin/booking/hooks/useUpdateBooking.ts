import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { Booking, UpdateBookingArguments } from "shared/schema/booking"

type TypeUseUpdateBooking = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateBooking(props: TypeUseUpdateBooking) {
    const { id, onSuccess } = props

    const { updateDiscount, getDiscount, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Booking,
        FormDataSchemaUpdate,
        UpdateBookingArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateDiscount,
        oneBuildQuery: getDiscount,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                checkInDate: data?.checkInDate ?? new Date(),
                checkOutDate: data?.checkOutDate ?? new Date(),
                couponId: data?.couponId ?? null,
                name: data?.name ?? '',
                phoneNumber: data?.phoneNumber ?? '',
                roomId: data?.roomId ?? null,
                cccd: data?.cccd ?? '',
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty } = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateBookingArguments = {
                id: id as string,
                cccd: value?.cccd ?? '',
                checkInDate: value?.checkInDate,
                checkOutDate: value?.checkOutDate,
                couponId: value?.couponId,
                name: value?.name,
                phoneNumber: value?.phoneNumber,
                roomId: value?.roomId,
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

export default useUpdateBooking
