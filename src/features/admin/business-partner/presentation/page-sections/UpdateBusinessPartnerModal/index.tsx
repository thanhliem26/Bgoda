import { WrapperAvatar } from 'features/admin/business-partner/shared/styles'
import useUpdateBusinessPartner from 'features/admin/business-partner/hooks/useUpdateBusinessPartner'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import AppNumberField from 'shared/components/form/AppNumberField'
import RoleAutoComplete from 'shared/components/autocomplete/role-auto-complete'
import AppUpload from 'shared/components/AppUpload'
import ProvinceAutoComplete from 'shared/components/autocomplete/province-auto-complete'
import DistrictAutoComplete from 'shared/components/autocomplete/distric-auto-complete'

interface IUpdateRoleTemplateModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateBusinessPartnerModal({ open, setOpen, id }: IUpdateRoleTemplateModal) {
  const { onSubmit, control, isPending, isValid, setValue, watch } = useUpdateBusinessPartner({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  const province = watch('provinceId')

  return (
    <ModalBase title="Edit Business partner" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
        <WrapperAvatar>
            <Box className="image_wrapper">
              <label htmlFor="image_background">
                <img
                  src={'/static/avatar/avatar_support.jpg'}
                  alt="avatar supporting"
                />
              </label>
            </Box>
            <Box className="avatar_upload">
              <FormControl style={{width: '100%', height: '100%'}}>
                <Controller
                  control={control}
                  name="logo"
                  render={({ field, fieldState }) => (
                    <FlexBox style={{ flexDirection: 'column', width: '100%', height: '100%' }}>
                      <AppUpload
                        value={field.value ?? ''}
                        onChangeUpload={({ file }) => {
                          field.onChange(file)
                        }}
                      >
                        <label htmlFor="image">
                          <img
                            width={'100%'}
                            src={
                              field.value
                                ? field.value
                                : '/static/avatar/001-man.svg'
                            }
                            alt="avatar"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',

                            }}
                          />
                        </label>
                      </AppUpload>
                      <HelperTextForm>
                        {fieldState.error?.message}
                      </HelperTextForm>
                    </FlexBox>
                  )}
                />
              </FormControl>
            </Box>
          </WrapperAvatar>
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
              name="email"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Email"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    disabled
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
            gap: 16
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="fullName"
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
              name="provinceId"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <ProvinceAutoComplete
                    label="Province"
                    required
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value)
                      setValue('districtId', '')
                    }}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="districtId"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <DistrictAutoComplete
                    label="District"
                    required
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value)
                    }}
                    id_province={province}
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
            gap: 16
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="address"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Address"
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
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Phone number"
                    value={field.value}
                    onChange={field.onChange}
                    required
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox>


        <FlexBox style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 8,
        }}>
          <FormControl>
            <Controller
              control={control}
              name="roleId"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <RoleAutoComplete
                    label="Role"
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

export default UpdateBusinessPartnerModal
