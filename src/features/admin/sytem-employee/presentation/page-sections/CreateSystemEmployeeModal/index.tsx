import useCreateSystemEmployee from 'features/admin/sytem-employee/hooks/useCreateSystemEmployee'
import { WrapperAvatar } from 'features/admin/business-partner/shared/styles'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import RoleAutoComplete from 'shared/components/autocomplete/role-auto-complete'
import AppNumberField from 'shared/components/form/AppNumberField'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import dayjs from 'dayjs'
import AppDatePicker from 'shared/components/form/AppDatePicker'
import BankAutoComplete from 'shared/components/autocomplete/bank-auto-complete'
import AppUpload from 'shared/components/AppUpload'

interface ICreateSystemEmployeeModal {
  open: boolean
  setOpen: (value: boolean) => void
}

function CreateSystemEmployeeModal({ open, setOpen }: ICreateSystemEmployeeModal) {
  const { onSubmit, control, isPending, isValid } = useCreateSystemEmployee({
    onSuccess: () => {
      setOpen(false)
    },
  })

  return (
    <ModalBase title="Add a new employee" open={open} setOpen={setOpen}>
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
              name="salary"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Salary"
                    value={field.value}
                    min={0}
                    onChange={field.onChange}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}

                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="bankNumber"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Bank number"
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
              name="bank"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                   <BankAutoComplete
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
              name="dob"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppDatePicker
                    label="Date of birth"
                    value={field.value ? dayjs(field.value) : null}
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
              name="password"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Password"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    type='password'
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
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="re_password"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Re password"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    type='password'
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

export default CreateSystemEmployeeModal
