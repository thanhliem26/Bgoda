
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateBusinessPartnerArguments } from "shared/schema/business-partner"

interface IcreateBusinessPartnerProps {
  onSuccess?: (value: any) => void
}

function useCreateBusinessPartner(props: IcreateBusinessPartnerProps = {}) {
  const { onSuccess } = props

  const { createBusinessPartner, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateBusinessPartnerArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createBusinessPartner,
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      phoneNumber: '',
      re_password: '',
      roleId: null
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue } = useFormReturn
  
  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {
      const payload: CreateBusinessPartnerArguments = {
        address: value.address,
        email: value.email,
        name: value.fullName,
        fullName: value.fullName,
        logo: value.logo ?? '',
        password: value.password,
        phoneNumber: value.phoneNumber,
        roleId: value.roleId ?? 0
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

export default useCreateBusinessPartner
