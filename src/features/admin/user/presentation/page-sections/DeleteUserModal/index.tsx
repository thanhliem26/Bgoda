import useDeleteUser from 'features/admin/user/hooks/useDeleteUser'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteUserModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteUserModal({ open, setOpen, id }: IDeleteUserModal) {
  const { onDelete, isPending } = useDeleteUser({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete user?" open={open} setOpen={setOpen}>
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

export default DeleteUserModal
