import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"
import { DeleteUserArguments } from "shared/schema/user"

type UseDeleteUserProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

function useDeleteUser(props: UseDeleteUserProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteUser } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteUserArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteUser,
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
export default useDeleteUser
