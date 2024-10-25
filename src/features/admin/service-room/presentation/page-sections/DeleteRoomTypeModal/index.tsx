import useDeleteRoleTemplate from 'features/admin/room-type/hooks/useDeleteRoomType'
import { useState } from 'react'
import AppButton from 'shared/components/AppButton'
import AppTextArea from 'shared/components/form/AppTextArea'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'

interface IDeleteRoomTypeModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DeleteRoomTypeModal({ open, setOpen, id }: IDeleteRoomTypeModal) {
  const [note, setNote] = useState<string>('');
  const { onDelete, isPending } = useDeleteRoleTemplate({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Do you want to delete room type?" open={open} setOpen={setOpen}>
      <Box>
        <AppTextArea
          style={{ width: '100%' }}
          label="Reason"
          value={note}
          onChange={(event) => {
            setNote(event.target.value)
          }}
        />
      </Box>
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
