import useDeleteRating from 'features/admin/feedback/hooks/useDeleteRating'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteRatingModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteRatingModal({ open, setOpen, id }: IDeleteRatingModal) {
  const { onDelete, isPending } = useDeleteRating({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete rating?" open={open} setOpen={setOpen}>
      <ModalFooter>
        <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
        <AppButton onClick={onDelete} loading={isPending}>
          Submit
        </AppButton>
      </ModalFooter>
    </ModalBase>
  )
}

export default DeleteRatingModal
