import useCreateRoomType from 'features/admin/service-room/hooks/useCreateServiceRoom'
import SelectIcon from 'features/admin/service-room/shared/components/SelecIcon'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextArea from 'shared/components/form/AppTextArea'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface ICreateServiceRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
}

function CreateServiceRoomModal({ open, setOpen }: ICreateServiceRoomModal) {
  const { onSubmit, control, isPending, isValid } = useCreateRoomType({
    onSuccess: () => {
      setOpen(false)
    },
  })

  return (
    <ModalBase title="Add a new service room" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 8,
            gap: 16
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Name"
                    required
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="icon"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column', width: 'auto', minWidth: '100px' }}>
                  <SelectIcon />
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
            gap: 16,
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="description"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextArea
                    label="Description"
                    value={field.value}
                    onChange={field.onChange}
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

export default CreateServiceRoomModal
