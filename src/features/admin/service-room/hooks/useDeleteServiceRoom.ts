import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"
import { DeleteUserArguments } from "shared/schema/user"

type UseDeleteServiceRoomProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

function useDeleteServiceRoom(props: UseDeleteServiceRoomProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteServiceRoom } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteUserArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteServiceRoom,
  })

  const { mutate, isPending } = useDeleteReturn

  function onDelete() {
    mutate({
      id,
    })
  }

  return {
    isPending,
    onDelete,
  }
}
export default useDeleteServiceRoom
