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
import { Fragment } from 'react/jsx-runtime'
import { DeleteOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import ImageComponent, {
  ImageAdd,
} from 'features/admin/room/shared/components/ImageComponent'
import { ImageType } from 'features/admin/room/domain/interfaces'
import EditorBox from 'shared/components/AppTinyEditor'

interface IUpdateRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function UpdateRoomModal({ open, setOpen, id }: IUpdateRoomModal) {
  const { onSubmit, control, isPending, isValid, setValue, watch, actions } =
    useUpdateBusinessPartner({
      onSuccess: () => {
        setOpen(false)
      },
      id: id,
    })

  const province = watch('province')
  const district = watch('district')
  const images = watch('images')

  const {
    handleAddImage,
    handleAddTypeImage,
    handleChangeCustomizeLabel,
    handleDeleteImage,
    handleDeleteTypeImage,
  } = actions

  return (
    <ModalBase title="Edit room" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
          <WrapperAvatar style={{ marginBottom: 0 }}>
            <Box className="image_wrapper" style={{ height: '200px' }}>
              <Controller
                control={control}
                name="thumbnail"
                render={({ field, fieldState }) => (
                  <FlexBox
                    style={{
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <AppUpload
                      value={field.value ?? ''}
                      onChangeUpload={({ file }) => {
                        field.onChange(file)
                      }}
                    >
                      <label htmlFor="image_background">
                        <img
                          width={'100%'}
                          src={
                            field.value
                              ? field.value
                              : '/static/avatar/avatar_support.jpg'
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
                    <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                  </FlexBox>
                )}
              />
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
              name="price"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Price"
                    value={field.value}
                    min={0}
                    onChange={field.onChange}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) =>
                      value?.replace(/\$\s?|(,*)/g, '') as unknown as number
                    }
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="defaultDiscount"
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
            gap: '16px',
          }}
        >
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
          <FormControl>
            <Controller
              control={control}
              name="avaiable"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppNumberField
                    label="Available"
                    value={field.value}
                    min={0}
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
            gap: '16px',
          }}
        >
          <FormControl>
            <Controller
              control={control}
              name="services"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
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
            gap: 16,
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
                      field.onChange(value)
                      setValue('district', '')
                      setValue('address', '')
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
                      field.onChange(value)
                      setValue('address', '')
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
              name="address"
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
              name="street"
              render={({ field, fieldState }) => (
                <FlexBox style={{ flexDirection: 'column' }}>
                  <AppTextField
                    label="Street"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                </FlexBox>
              )}
            />
          </FormControl>
        </FlexBox>

        <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
          <FlexBox style={{ flexDirection: 'column', gap: '8px' }}>
            {images?.map((item) => {
              return (
                <FlexBox
                  key={item.id}
                  style={{ flexDirection: 'column', gap: '8px' }}
                >
                  <FlexBox
                    style={{ width: '100%', gap: '20px', alignItems: 'center' }}
                  >
                    {item.type === ImageType.FIXED ? (
                      <Fragment>
                        <Tiny style={{ fontSize: '16px', fontWeight: 500 }}>
                          {item.label}
                        </Tiny>
                        <Box style={{ cursor: 'pointer' }}>
                          <DeleteOutlined
                            onClick={() => {
                              handleDeleteTypeImage({ id: item.id })
                            }}
                          />
                        </Box>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <Box>
                          <AppTextField
                            value={item.label}
                            onChange={(event) => {
                              handleChangeCustomizeLabel({
                                id: item.id,
                                label: event.target.value,
                              })
                            }}
                          />
                        </Box>
                        <Box style={{ cursor: 'pointer' }}>
                          <DeleteOutlined
                            onClick={() => {
                              handleDeleteTypeImage({ id: item.id })
                            }}
                          />
                        </Box>
                      </Fragment>
                    )}
                  </FlexBox>
                  <Row gutter={[16, 16]}>
                    {item.urls.map((itemImage) => {
                      return (
                        <Col key={itemImage} span={12} sm={8} lg={6}>
                          <ImageComponent
                            onDelete={() => {
                              handleDeleteImage({
                                id: item.id,
                                url: itemImage as string,
                              })
                            }}
                            url={itemImage as string}
                          />
                        </Col>
                      )
                    })}
                    <Col span={12} sm={8} lg={6}>
                      <ImageAdd
                        onChange={(file) => {
                          handleAddImage({ id: item.id, url: file })
                        }}
                      />
                    </Col>
                  </Row>
                </FlexBox>
              )
            })}
          </FlexBox>
          <Box>
            <AppButton onClick={handleAddTypeImage}>
              Add image room type
            </AppButton>
          </Box>
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

export default UpdateRoomModal
