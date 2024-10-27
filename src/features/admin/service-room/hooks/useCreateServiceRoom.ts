
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateServiceRoomArguments } from "shared/schema/service-room"

interface createServiceRoomProps {
  onSuccess?: (value: any) => void
}

function useCreateServiceRoom(props: createServiceRoomProps = {}) {
  const { onSuccess } = props

  const { createServiceRoom, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateServiceRoomArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createServiceRoom,
    defaultValues: {
      name: '',
      description: '',
      icon: ''
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue } = useFormReturn
console.log("formState", formState.isValid, formState.errors)
  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {

      mutate(value as CreateServiceRoomArguments)
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

export default useCreateServiceRoom
