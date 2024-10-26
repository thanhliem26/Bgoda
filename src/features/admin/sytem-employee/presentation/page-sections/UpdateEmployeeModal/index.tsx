import { WrapperAvatar } from 'features/admin/business-partner/shared/styles'
import useUpdateEmployee from 'features/admin/sytem-employee/hooks/useUpdateEmployee'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import AppNumberField from 'shared/components/form/AppNumberField'
import RoleAutoComplete from 'shared/components/autocomplete/role-auto-complete'
import AppDatePicker from 'shared/components/form/AppDatePicker'
import dayjs from 'dayjs'

interface IUpdateEmployeeModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateSystemEmployeeModal({ open, setOpen, id }: IUpdateEmployeeModal) {
  const { onSubmit, control, isPending, isValid } = useUpdateEmployee({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  return (
    <ModalBase title="Edit System employee" open={open} setOpen={setOpen}>
        <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
          <WrapperAvatar>
            <Box className="image_wrapper">
              <label htmlFor="image_background">
                <img src={'/static/avatar/avatar_support.jpg'} alt="avatar supporting" />
              </label>
            </Box>
            <Box className="avatar_upload">
              <label htmlFor="image">
                <img src={'/static/avatar/001-man.svg'} alt="avatar" />
              </label>
              {/* <UploadComponent
                id="image"
                name="avatar"
                control={control}
                // errors={errors}
                className="remove__border"
                setValue={setValue}
                maxCount={1}
                uploadSelf={true}
              // onChange={(file) => handleChange(file, FileListAvatar, "avatar")}
              /> */}
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

export default UpdateSystemEmployeeModal
