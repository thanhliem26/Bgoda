
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateRoomTypeArguments } from "shared/schema/room-type"

interface createRoomTypeProps {
  onSuccess?: (value: any) => void
}

function useCreateRoomType(props: createRoomTypeProps = {}) {
  const { onSuccess } = props

  const { createRoomType, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateRoomTypeArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createRoomType,
    defaultValues: {
      name: '',
      description: ''
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {

      mutate(value as CreateRoomTypeArguments)
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

export default useCreateRoomType
