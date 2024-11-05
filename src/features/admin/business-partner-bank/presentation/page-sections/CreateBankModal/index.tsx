import useCreateBank from 'features/admin/business-partner-bank/hooks/useCreateBank'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import BankApiAutoComplete from 'shared/components/autocomplete/bank-api-auto-complete'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface ICreateBankModal {
  open: boolean
  setOpen: (value: boolean) => void
}

function CreateBankModal({
  open,
  setOpen,
}: ICreateBankModal) {
  const { onSubmit, control, isPending, isValid } = useCreateBank({
    onSuccess: () => {
      setOpen(false)
    },
  })

  return (
    <ModalBase title="Add a new bank" open={open} setOpen={setOpen}>
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

export default CreateBankModal
