import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { Employee, UpdateEmployeeArguments } from "shared/schema/system-empoyee"

type UseUpdateEmployee = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateEmployee(props: UseUpdateEmployee) {
    const { id, onSuccess } = props
    const { updateEmployee, getEmployee, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Employee,
        FormDataSchemaUpdate,
        UpdateEmployeeArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateEmployee,
        oneBuildQuery: getEmployee,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {

            return {
                id: data?.id ?? '',
                address: data?.address ?? '',
                email: data?.email ?? '',
                fullName: data?.fullName ?? '',
                phoneNumber: data?.phoneNumber,
                roleId: data?.roleId ?? null,
                dob: data?.dob ?? null,
                password: data?.password ?? '',
                re_password: data?.password ?? '',
                avatar: data?.avatar,
                bankNumber: data?.bankNumber,
                salary: data?.salary 
            }
        },
    })


    const { handleSubmit, control, formState, setValue } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn

    function onSubmit() {
        handleSubmit((value) => {

            const payload: UpdateEmployeeArguments = {
                address: value.address ?? '',
                email: value.email,
                fullName: value.fullName,
                name: value.fullName,
                avatar: value.avatar ?? '',
                password: value.password,
                roleId: value.roleId ?? 0,
                bankNumber: '',
                dob: value.dob ?? new Date(),
                phoneNumber: '',
                salary: 0,
        
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
    }
}

export default useUpdateEmployee
