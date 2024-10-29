import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"

type UseDeleteRoomProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

type DeleteArguments = {
  id: string
}

function useDeleteRoom(props: UseDeleteRoomProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteRoom } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteRoom,
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
export default useDeleteRoom
