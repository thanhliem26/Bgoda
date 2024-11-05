import dayjs from 'dayjs'
import { WrapperAvatar } from 'features/admin/sytem-employee/shared/styles'
import useUpdateUser from 'features/admin/user/hooks/useUpdateUser'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppUpload from 'shared/components/AppUpload'
import GenderAutoComplete from 'shared/components/autocomplete/gender-auto-complete'
import AppDatePicker from 'shared/components/form/AppDatePicker'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface IUpdateUserModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateUserModal({ open, setOpen, id }: IUpdateUserModal) {
  const { onSubmit, control, isPending, isValid } = useUpdateUser({
    onSuccess: () => {
      setOpen(false)
    },
    id: id,
  })

  return (
    <ModalBase title="Edit user" open={open} setOpen={setOpen}>
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
                  name="avatar"
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
                    disabled={true}
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
              name="dob"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppDatePicker
                    label="Date of birth"
                    value={field.value ? dayjs(field.value) : null}
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
                  <AppTextField
                    label="Phone number"
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
              name="address"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Address"
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
              name="gender"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <GenderAutoComplete
                    value={field.value}
                    onChange={field.onChange}
                    label="Gender"
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

export default UpdateUserModal
