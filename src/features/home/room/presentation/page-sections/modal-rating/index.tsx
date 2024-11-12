import { Rate } from 'antd'
import useCreateRating from 'features/home/room/hooks/useCreateRating'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextArea from 'shared/components/form/AppTextArea'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface ICreateRatingModal {
  open: boolean
  setOpen: (value: boolean) => void
  roomId: number
}

function CreateRatingModal({ open, setOpen, roomId }: ICreateRatingModal) {
  const { onSubmit, control, isPending, isValid } = useCreateRating({
    onSuccess: () => {
      setOpen(false)
    },
    roomId: roomId,
  })

  return (
    <ModalBase title="Create rating" open={open} setOpen={setOpen}>
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
              name="rate"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <Rate value={field.value} onChange={field.onChange} />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox>
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
              name="comment"
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

export default CreateRatingModal
