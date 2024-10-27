
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateEmployeeArguments } from "shared/schema/system-empoyee"

type createEmployeeProps = {
  onSuccess?: (value: any) => void
}

function useCreateSystemEmployee(props: createEmployeeProps = {}) {
  const { onSuccess } = props

  const { createEmployee, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateEmployeeArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createEmployee,
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      phoneNumber: '',
      re_password: '',
      roleId: null,
      address: '',
      avatar: '',
      bankNumber: '',
      dob: null,
      salary: null
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {
      const payload: CreateEmployeeArguments = {
        address: value.address ?? '',
        email: value.email,
        fullName: value.fullName,
        name: value.fullName,
        avatar: value.avatar ?? '',
        password: value.password,
        roleId: value.roleId ?? 0,
        bankNumber: value.bankNumber ?? '',
        dob: value.dob ?? new Date(),
        phoneNumber: value.phoneNumber ?? '',
        salary: value.salary ?? 0,
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
    setValue
  }
}

export default useCreateSystemEmployee
