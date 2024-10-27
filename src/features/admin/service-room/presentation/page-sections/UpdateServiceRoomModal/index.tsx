import useUpdateServiceRoom from 'features/admin/service-room/hooks/useUpdateServiceRoom'
import SelectIcon from 'features/admin/service-room/shared/components/SelecIcon'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextArea from 'shared/components/form/AppTextArea'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface IUpdateServiceRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateServiceRoomModal({ open, setOpen, id }: IUpdateServiceRoomModal) {
  const { onSubmit, control, isPending, isValid } = useUpdateServiceRoom({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Edit service room" open={open} setOpen={setOpen}>
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
                  <SelectIcon value={field.value} onChange={field.onChange}/>
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

export default UpdateServiceRoomModal
