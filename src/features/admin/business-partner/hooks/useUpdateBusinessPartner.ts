import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { BusinessPartner, UpdateBusinessPartnerArguments } from "shared/schema/business-partner"

type UseUpdateBusinessPartner = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateBusinessPartner(props: UseUpdateBusinessPartner) {
    const { id, onSuccess } = props
    const { updateBusinessPartner, getBusinessPartner, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        BusinessPartner,
        FormDataSchemaUpdate,
        UpdateBusinessPartnerArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateBusinessPartner,
        oneBuildQuery: getBusinessPartner,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                id: data?.id,
                address: data?.address ?? '',
                email: data?.email ?? '',
                fullName: data?.companyName ?? '',
                logo: data?.logo ?? '',
                phoneNumber: data?.phoneNumber ?? '',
                roleId: data?.roleId ?? null,
                districtId: data?.districtId ?? '',
                provinceId: data?.provinceId ?? '',
                streetId: data?.streetId ?? '',
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateBusinessPartnerArguments = {
                id: id as string,
                address: value.address,
                email: value.email,
                name: value.fullName,
                fullName: value.fullName,
                logo: value.logo ?? '',
                phoneNumber: value.phoneNumber,
                roleId: value.roleId ?? 0,
                districtId: value?.districtId ?? '',
                provinceId: value?.provinceId ?? '',
                streetId: value?.streetId ?? ''
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

export default useUpdateBusinessPartner
