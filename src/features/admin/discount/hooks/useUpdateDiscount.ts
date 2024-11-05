import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { Discount, UpdateDiscountArguments } from "shared/schema/discount"
import useGetRoomIds from "./useGetListRoomDiscount"

type TypeUseUpdateBusinessPartner = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateDiscount(props: TypeUseUpdateBusinessPartner) {
    const { id, onSuccess } = props
    const { idsRoom } = useGetRoomIds();

    const { updateDiscount, getDiscount, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Discount,
        FormDataSchemaUpdate,
        UpdateDiscountArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateDiscount,
        oneBuildQuery: getDiscount,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                discountValue: data?.discountValue ?? 0,
                discountMax: data?.discountMax ?? 0,
                discountType: data?.discountType ?? 0,
                endDate: data?.endDate ?? new Date(),
                startDate: data?.startDate ?? new Date(),
                image: data?.image ?? '',
                name: data?.name ?? '',
                roomApplyIds: data?.roomApplyIds?.map((item) => Number(item)) ?? [],
                description: data?.description,
                allRoom: false
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty } = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateDiscountArguments = {
                id: id as string,
                description: value?.description ?? '',
                discountValue: value?.discountValue ?? 0,
                discountMax: value?.discountMax ?? 0,
                discountType: value?.discountType ?? 0,
                endDate: value?.endDate ?? new Date(),
                image: value?.image ?? '',
                name: value?.name ?? '',
                roomApplyIds: value?.allRoom ? idsRoom : value?.roomApplyIds ? value?.roomApplyIds : [],
                startDate: value?.startDate ?? new Date()
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

export default useUpdateDiscount
