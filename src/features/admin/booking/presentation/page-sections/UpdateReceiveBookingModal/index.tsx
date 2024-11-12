import useUpdateBooking from 'features/admin/booking/hooks/useUpdateBooking'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IUpdateBookingModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateReceiveBookingModal({ open, setOpen, id }: IUpdateBookingModal) {
  const { onSubmit, isPending } = useUpdateBooking({
    onSuccess: () => {
      setOpen(false)
    },
    id: id,
  })

  return (
    <ModalBase title="Do you want to change status booking is received?" open={open} setOpen={setOpen}>
      <ModalFooter>
        <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
        <AppButton onClick={onSubmit} loading={isPending}>
          Submit
        </AppButton>
      </ModalFooter>
    </ModalBase>
  )
}

export default UpdateReceiveBookingModal
