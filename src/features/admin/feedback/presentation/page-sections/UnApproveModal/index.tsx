import useUnApproveRating from 'features/admin/feedback/hooks/useUpdateUnApprove'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IUpdateBookingModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UnUpdateApproveModal({ open, setOpen, id }: IUpdateBookingModal) {
  const { onSubmit, isPending } = useUnApproveRating({
    onSuccess: () => {
      setOpen(false)
    },
    id: id,
  })

  return (
    <ModalBase title="Do you want to un approve this rating?" open={open} setOpen={setOpen}>
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

export default UnUpdateApproveModal
