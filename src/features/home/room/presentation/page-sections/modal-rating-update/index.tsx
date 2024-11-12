import useUpdateRating from 'features/home/room/hooks/useUpdateRating'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextArea from 'shared/components/form/AppTextArea'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface IUpdateRatingModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: number
  comment: string
}

function UpdateRatingModal({ open, setOpen, id, comment }: IUpdateRatingModal) {
  const { onSubmit, control, isPending, isValid } = useUpdateRating({
    onSuccess: () => {
      setOpen(false)
    },
    id: id,
    comment: comment
  })

  return (
    <ModalBase title="Update rating" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 8,
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="updateComment"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextArea
                    label="Comment"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    rows={4}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox>
      </FlexBox>
      <ModalFooter>
        <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
        <AppButton disabled={isValid} onClick={onSubmit} loading={isPending}>
          Submit
        </AppButton>
      </ModalFooter>
    </ModalBase>
  )
}

export default UpdateRatingModal
