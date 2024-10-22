import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"
import { DeleteUserArguments } from "shared/schema/user"

type UseDeleteRoleTemplateProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

function useDeleteRoleTemplate(props: UseDeleteRoleTemplateProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteRoleTemplate } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteUserArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteRoleTemplate,
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
export default useDeleteRoleTemplate
