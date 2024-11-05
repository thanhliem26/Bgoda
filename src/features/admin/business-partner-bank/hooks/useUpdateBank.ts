import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { Bank, UpdateBankArguments } from "shared/schema/bank"

type TypeUseUpdateBank = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateBank(props: TypeUseUpdateBank) {
    const { id, onSuccess } = props
    const { updateBusinessPartnerBank, getBusinessPartnerBank, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Bank,
        FormDataSchemaUpdate,
        UpdateBankArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateBusinessPartnerBank,
        oneBuildQuery: getBusinessPartnerBank,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                bankId: data?.bankId ?? null,
                bankNumber: data?.bankNumber ?? '',
                ownerName: data?.ownerName ?? '',
                status: data?.status ?? true,
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateBankArguments = {
                id: id as string,
                bankId: value?.bankId ?? 0,
                bankNumber: value?.bankNumber,
                ownerName: value?.ownerName,
                status: value?.status
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

export default useUpdateBank
