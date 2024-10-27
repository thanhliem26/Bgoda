import useDeleteServiceRoom from 'features/admin/service-room/hooks/useDeleteServiceRoom'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteServiceRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteServiceRoomModal({ open, setOpen, id }: IDeleteServiceRoomModal) {
  const { onDelete, isPending } = useDeleteServiceRoom({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete service room?" open={open} setOpen={setOpen}>
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

export default DeleteServiceRoomModal
