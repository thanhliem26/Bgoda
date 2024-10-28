import { WrapperAvatar } from 'features/admin/room/shared/styles'
import useUpdateBusinessPartner from 'features/admin/room/hooks/useUpdateRoom'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import AppNumberField from 'shared/components/form/AppNumberField'
import RoleAutoComplete from 'shared/components/autocomplete/role-auto-complete'
import AppUpload from 'shared/components/AppUpload'
import ProvinceAutoComplete from 'shared/components/autocomplete/province-auto-complete'
import BusinessPartnerAutoComplete from 'shared/components/autocomplete/business-partner-auto-complete'
import RoomServiceAutoComplete from 'shared/components/autocomplete/room-service-auto-complete'
import RoomTypeAutoComplete from 'shared/components/autocomplete/room-type-auto-complete-base'
import DistrictAutoComplete from 'shared/components/autocomplete/distric-auto-complete'
import CommuneAutoComplete from 'shared/components/autocomplete/commune-auto-complete'
import { Tiny } from 'shared/styles/Typography'

interface IUpdateRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateRoomModal({ open, setOpen, id }: IUpdateRoomModal) {
  const { onSubmit, control, isPending, isValid, setValue, watch } = useUpdateBusinessPartner({
    onSuccess: () => {
      setOpen(false)
    },
    id: id
  })

  const province = watch('province');
  const district = watch('district');

  return (
    <ModalBase title="Edit room" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        {/* <FlexBox>
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
              <FormControl style={{ width: '100%', height: '100%' }}>
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
        </FlexBox> */}

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
              name="price"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Price"
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
              name="discount"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Discount"
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
            gap: '16px'
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="partner_id"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <BusinessPartnerAutoComplete
                    label="Business partner"
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
              name="roomTypeId"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <RoomTypeAutoComplete
                    label="Room type"
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
            gap: '16px'
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="services"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }} gap={8}>
                  <Tiny>Services <span style={{color: 'red'}}>*</span></Tiny>
                  <RoomServiceAutoComplete
                    label="Services"
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
              name="province"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <ProvinceAutoComplete
                    label="Province"
                    required
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      setValue('district', '');
                      setValue('commune', '');
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
              name="district"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <DistrictAutoComplete
                    label="District"
                    required
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      setValue('commune', '');
                    }}
                    id_province={province}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="commune"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <CommuneAutoComplete
                    label="Commune"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    id_district={district}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox>

        {/* <FlexBox
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
              name="description"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <EditorBox
                    value={field.value ?? ''}
                    onEditorChange={(value) => {
                      field.onChange(value)
                    }}
                     />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox> */}

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

export default UpdateRoomModal
