
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateRoomArguments } from "shared/schema/room"

interface IcreateRoomProps {
  onSuccess?: (value: any) => void
}

function useCreateRoom(props: IcreateRoomProps = {}) {
  const { onSuccess } = props

  const { createRoom, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateRoomArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createRoom,
    defaultValues: {
      commune: '',
      description: '',
      discount: null,
      district: '',
      map: '',
      name: '',
      price: null,
      province: '',
      services: []
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue, watch } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {
      const payload: CreateRoomArguments = {
        commune: value.commune,
        description: value.description ?? '',
        discount: value.discount ?? 0,
        district: value.district,
        map: value?.map ?? '',
        name: value?.name,
        price: value?.price ?? 0,
        province: value?.province,
        services: value?.services,
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

export default useCreateRoom
