import useDeleteRoleTemplate from 'features/admin/room-type/hooks/useDeleteRoomType'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
interface IDeleteRoomTypeModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteRoomTypeModal({ open, setOpen, id }: IDeleteRoomTypeModal) {
  const { onDelete, isPending } = useDeleteRoleTemplate({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete room type?" open={open} setOpen={setOpen}>
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

export default DeleteRoomTypeModal
