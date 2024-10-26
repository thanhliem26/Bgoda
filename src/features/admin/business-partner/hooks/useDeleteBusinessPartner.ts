import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"

type UseDeleteBusinessPartnerProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

type DeleteArguments = {
  id: string
}

function useDeleteBusinessPartner(props: UseDeleteBusinessPartnerProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteBusinessPartner } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteBusinessPartner,
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
export default useDeleteBusinessPartner
