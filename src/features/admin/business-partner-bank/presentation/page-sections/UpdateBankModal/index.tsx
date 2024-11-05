import useUpdateBank from 'features/admin/business-partner-bank/hooks/useUpdateBank'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import BankApiAutoComplete from 'shared/components/autocomplete/bank-api-auto-complete'
import { Switch } from 'antd'
import { Tiny } from 'shared/styles/Typography'

interface IUpdateBankModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateBankModal({ open, setOpen, id }: IUpdateBankModal) {
  const { onSubmit, control, isPending, isValid, setValue } = useUpdateBank({
    onSuccess: () => {
      setOpen(false)
    },
    id: id,
  })

  return (
    <ModalBase title="Edit bank" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
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
              name="ownerName"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Owner Name"
                    required
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl style={{width: '50px', position: 'relative', top: '-5px'}}>
            <Controller
              control={control}
              name="status"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                 <FlexBox style={{flexDirection: 'column'}}>
                 <Tiny>Status</Tiny>
                  <Switch
                  style={{width: '50px'}}
                    checked={field.value}
                    onChange={(value) => {
                      setValue('status', value, {shouldDirty: true})
                    }}
                  />
                 </FlexBox>
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
              name="bankNumber"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Bank number"
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
              name="bankId"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <BankApiAutoComplete
                    label="Bank"
                    required
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

export default UpdateBankModal
