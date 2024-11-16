import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import useDeleteResource from "shared/hooks/crud-hook/useDeleteResource"

type UseDeleteRatingProps = {
  id: string
  onSuccess: (data: BaseRecord) => void
  onError?: (data: BaseRecord) => void
}

type DeleteArguments = {
  id: string
}

function useDeleteRating(props: UseDeleteRatingProps) {
  const { id, onSuccess, onError } = props
  const { queryKey, deleteRating } = useService()
  const { useDeleteReturn } = useDeleteResource<DeleteArguments>({
    mutationKey: [queryKey],
    onSuccess,
    onError,
    queryString: deleteRating,
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
export default useDeleteRating
