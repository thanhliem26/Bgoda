import { Checkbox } from 'antd'
import dayjs from 'dayjs'
import useCreateDiscount from 'features/admin/discount/hooks/useCreateDiscount'
import { WrapperAvatar } from 'features/admin/discount/shared/styles'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import EditorBox from 'shared/components/AppTinyEditor'
import AppUpload from 'shared/components/AppUpload'
import DiscountTypeAutoComplete from 'shared/components/autocomplete/discount-type-auto-complete'
import RoomAutoComplete from 'shared/components/autocomplete/room-auto-complete'
import AppDatePicker from 'shared/components/form/AppDatePicker'
import AppNumberField from 'shared/components/form/AppNumberField'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface ICreateDiscountModal {
  open: boolean
  setOpen: (value: boolean) => void
}

function CreateDiscountModal({
  open,
  setOpen,
}: ICreateDiscountModal) {
  const { onSubmit, control, isPending, isValid, watch } = useCreateDiscount({
    onSuccess: () => {
      setOpen(false)
    },
  })

  const allRoom = watch('allRoom');

  return (
    <ModalBase title="Add a new discount" open={open} setOpen={setOpen}>
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
              <FormControl style={{ width: '100%', height: '100%' }}>
                <Controller
                  control={control}
                  name="image"
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
              name="discountType"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <DiscountTypeAutoComplete label='Discount type' required={true} value={field.value} onChange={field.onChange} />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="discountMax"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Discount max"
                    value={field.value}
                    min={0}
                    onChange={field.onChange}
                    required
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="discountValue"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Discount value"
                    value={field.value}
                    min={0}
                    onChange={field.onChange}
                    required
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
              name="startDate"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppDatePicker
                    label="Start date"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={field.onChange}
                    required
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="endDate"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppDatePicker
                    label="End date"
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

        <FlexBox
          style={{
            justifyContent: 'flex-start',
            alignContent: 'center',
            marginTop: 8,
            gap: 16,
          }}
        >
          <FormControl style={{width: '120px'}}>
            <Controller
              control={control}
              name="allRoom"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <Checkbox value={field.value} onChange={field.onChange}>All Room</Checkbox>
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>


          {!allRoom && <FormControl>
            <Controller
              control={control}
              name="roomApplyIds"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <RoomAutoComplete
                    label="Room apply"
                    required
                    value={field.value}
                    onChange={field.onChange}
                    mode='tags'
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>}


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

export default CreateDiscountModal
