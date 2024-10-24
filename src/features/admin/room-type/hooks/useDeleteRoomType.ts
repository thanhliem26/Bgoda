import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"
import { DeleteUserArguments } from "shared/schema/user"

type UseDeleteRoomTypeProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

function useDeleteRoomType(props: UseDeleteRoomTypeProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteRoomType } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteUserArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteRoomType,
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
export default useDeleteRoomType
