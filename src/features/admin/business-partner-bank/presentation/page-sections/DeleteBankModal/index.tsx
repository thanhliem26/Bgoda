import useDeleteBank from 'features/admin/business-partner-bank/hooks/useDeleteBank'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteBankModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteBankModal({ open, setOpen, id }: IDeleteBankModal) {
  const { onDelete, isPending } = useDeleteBank({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete business partner bank?" open={open} setOpen={setOpen}>
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

export default DeleteBankModal
