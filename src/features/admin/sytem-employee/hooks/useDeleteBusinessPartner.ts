import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"

type UseDeleteEmployeeProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

type DeleteArguments = {
  id: string
}

function useDeleteEmployee(props: UseDeleteEmployeeProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteEmployee } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteEmployee,
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
export default useDeleteEmployee
