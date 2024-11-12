
import { yupResolver } from "@hookform/resolvers/yup"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import useService from "../services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import { CreateRatingArguments } from "shared/schema/rating"

interface ICreateRatingProps {
    onSuccess?: (value: any) => void
    roomId: number
}

function useCreateRating(props: ICreateRatingProps) {
    const { onSuccess, roomId } = props

    const { createRating, queryKey } = useService()
    const { useCreateReturn, useFormReturn } = useCreateResource<
        CreateRatingArguments,
        FormDataSchema
    >({
        mutationKey: [queryKey],
        queryString: createRating,
        defaultValues: {
            comment: '',
            rate: 5,
            roomId
        },
        resolver: yupResolver(schema),
        onSuccess: onSuccess,
    })

    const { handleSubmit, control, formState, setValue, watch } = useFormReturn

    const isValid = !formState.isValid
    const { isPending, mutate } = useCreateReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: CreateRatingArguments = {
                roomId: value?.roomId ?? 0,
                comment: value?.comment ?? '',
                rate: value?.rate ?? 0,
            }

            mutate(payload)
        })()
    }

    return {
        onSubmit,
        control,
        isValid,
        isPending,
        formState,
        setValue,
        watch
    }
}

export default useCreateRating
