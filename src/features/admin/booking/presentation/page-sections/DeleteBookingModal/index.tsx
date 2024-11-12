import useDeleteBooking from 'features/admin/booking/hooks/useDeleteBooking'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteBookingModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteBookingModal({ open, setOpen, id }: IDeleteBookingModal) {
  const { onDelete, isPending } = useDeleteBooking({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete booking?" open={open} setOpen={setOpen}>
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

export default DeleteBookingModal
