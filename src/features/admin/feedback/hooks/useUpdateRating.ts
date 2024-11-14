import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaReceive, schemaReceived } from "../shared/constants/schema"
import { Booking, UpdateReceivedBookingArguments } from "shared/schema/booking"

type TypeUseUpdateRating = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateRating(props: TypeUseUpdateRating) {
    const { id, onSuccess } = props

    const { updateApproveRating, getRating, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Booking,
        FormDataSchemaReceive,
        UpdateReceivedBookingArguments
    >({
        resolver: yupResolver(schemaReceived),
        editBuildQuery: updateApproveRating,
        oneBuildQuery: getRating,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues() {

            return {
                received: [id]
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty } = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateReceivedBookingArguments = {
               received: value?.received as string[]
            }

            //@ts-ignore
            mutate(payload.received)
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

export default useUpdateRating
