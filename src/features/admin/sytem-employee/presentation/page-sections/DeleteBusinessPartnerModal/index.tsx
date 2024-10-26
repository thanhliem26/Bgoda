import useDeleteBusinessPartner from 'features/admin/sytem-employee/hooks/useDeleteBusinessPartner'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteEmployeeModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteEmployeeModal({ open, setOpen, id }: IDeleteEmployeeModal) {
  const { onDelete, isPending } = useDeleteBusinessPartner({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete employee?" open={open} setOpen={setOpen}>
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

export default DeleteEmployeeModal
