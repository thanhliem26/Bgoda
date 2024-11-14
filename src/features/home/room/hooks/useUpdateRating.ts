
import { yupResolver } from "@hookform/resolvers/yup"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import useService from "../services"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { UpdateRatingArguments } from "shared/schema/rating"
import { MODLUE_QUERY_KEY } from "shared/interfaces/common"

interface IUpdateRatingProps {
    onSuccess?: (value: any) => void
    id: number
    comment: string
}

function useUpdateRating(props: IUpdateRatingProps) {
    const { onSuccess, id, comment } = props

    const { updateRating } = useService()
    const { useCreateReturn, useFormReturn } = useCreateResource<
    UpdateRatingArguments,
    FormDataSchemaUpdate
    >({
        mutationKey: [MODLUE_QUERY_KEY.APPLICATION_RATING],
        queryString: updateRating,
        defaultValues: {
            id: id,
            updateComment: comment
        },
        resolver: yupResolver(schemaUpdate),
        onSuccess: onSuccess,
    })

    const { handleSubmit, control, formState, setValue, watch } = useFormReturn

    const isValid = !formState.isValid
    const { isPending, mutate } = useCreateReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: UpdateRatingArguments = {
                id: value?.id ?? 0,
                updateComment: value?.updateComment ?? ''
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

export default useUpdateRating
