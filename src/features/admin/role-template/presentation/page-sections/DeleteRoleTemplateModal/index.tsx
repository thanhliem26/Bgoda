import useDeleteRoleTemplate from 'features/admin/role-template/hooks/useDeleteRoleTemplate'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteRoleTemplateModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteRoleTemplateModal({ open, setOpen, id }: IDeleteRoleTemplateModal) {
  const { onDelete, isPending } = useDeleteRoleTemplate({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete role template?" open={open} setOpen={setOpen}>
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

export default DeleteRoleTemplateModal
