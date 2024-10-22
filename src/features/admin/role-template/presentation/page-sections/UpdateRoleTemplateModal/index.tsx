import useUpdateRoleTemplate from 'features/admin/role-template/hooks/useUpdateRoleTemplate'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import PermissionAutoComplete from 'shared/components/autocomplete/permission-auto-complete'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface IUpdateRoleTemplateModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateRoleTemplateModal({ open, setOpen, id }: IUpdateRoleTemplateModal) {
  const { onSubmit, control, isPending, isValid } = useUpdateRoleTemplate({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Edit role template" open={open} setOpen={setOpen}>
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
            name="permission"
            render={({ field, fieldState }) => (
              <FlexBox style={{ flexDirection: 'column' }}>
                <PermissionAutoComplete
                  label="Permission"
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

export default UpdateRoleTemplateModal
