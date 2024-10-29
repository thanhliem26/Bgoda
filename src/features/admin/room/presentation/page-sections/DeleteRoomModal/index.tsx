import useDeleteRoom from 'features/admin/room/hooks/useDeleteRoom'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteRoomModal({ open, setOpen, id }: IDeleteRoomModal) {
  const { onDelete, isPending } = useDeleteRoom({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete business partner?" open={open} setOpen={setOpen}>
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

export default DeleteRoomModal
