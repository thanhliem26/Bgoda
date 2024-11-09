
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateDiscountArguments } from "shared/schema/discount"
import useGetRoomIds from "./useGetListRoomDiscount"

interface IcreateDiscountProps {
  onSuccess?: (value: any) => void
}

function useCreateDiscount(props: IcreateDiscountProps) {
  const { onSuccess } = props
  const { idsRoom } = useGetRoomIds();

  const { createDiscount, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateDiscountArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createDiscount,
    defaultValues: {
      description: '',
      discountValue: 1,
      image: '',
      name: '',
      roomApplyIds: [],
      allRoom: false,
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue, watch } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {
      const payload: CreateDiscountArguments = {
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
    onSubmit,
    control,
    isValid,
    isPending,
    formState,
    setValue,
    watch
  }
}

export default useCreateDiscount
