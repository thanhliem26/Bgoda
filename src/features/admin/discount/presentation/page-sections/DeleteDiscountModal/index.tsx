import useDeleteDiscount from 'features/admin/discount/hooks/useDeleteDiscount'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteDiscountModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteDiscountModal({ open, setOpen, id }: IDeleteDiscountModal) {
  const { onDelete, isPending } = useDeleteDiscount({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete discount?" open={open} setOpen={setOpen}>
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

export default DeleteDiscountModal
