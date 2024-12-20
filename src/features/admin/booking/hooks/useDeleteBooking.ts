import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"

type UseDeleteBookingProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

type DeleteArguments = {
  id: string
}

function useDeleteBooking(props: UseDeleteBookingProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteBooking } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteBooking,
  })

  const { mutate, isPending } = useDeleteReturn

  function onDelete() {
    //@ts-ignore
    mutate([id])
  }

  return {
    isPending,
    onDelete,
  }
}
export default useDeleteBooking
