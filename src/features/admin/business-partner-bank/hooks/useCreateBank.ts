
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateBankArguments } from "shared/schema/bank"

interface IcreateBusinessPartnerProps {
  onSuccess?: (value: any) => void
}

function useCreateBank(props: IcreateBusinessPartnerProps = {}) {
  const { onSuccess } = props

  const { createBusinessPartnerBank, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateBankArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createBusinessPartnerBank,
    defaultValues: {
      bankId: null,
      bankNumber: '',
      ownerName: '',
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue, watch } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {
      const payload: CreateBankArguments = {
        bankId: value?.bankId ?? 0,
        bankNumber: value?.bankNumber,
        ownerName: value?.ownerName
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

export default useCreateBank
