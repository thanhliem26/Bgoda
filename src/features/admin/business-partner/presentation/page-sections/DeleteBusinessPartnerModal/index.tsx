import useDeleteBusinessPartner from 'features/admin/business-partner/hooks/useDeleteBusinessPartner'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'

interface IDeleteBusinessPartnerModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteBusinessPartnerModal({ open, setOpen, id }: IDeleteBusinessPartnerModal) {
  const { onDelete, isPending } = useDeleteBusinessPartner({
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

export default DeleteBusinessPartnerModal
