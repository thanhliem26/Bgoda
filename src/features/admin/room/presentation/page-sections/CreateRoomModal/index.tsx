import useCreateRoom from 'features/admin/room/hooks/useCreateRoom'
import { WrapperAvatar } from 'features/admin/room/shared/styles'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import EditorBox from 'shared/components/AppTinyEditor'
import AppUpload from 'shared/components/AppUpload'
import RoomServiceAutoComplete from 'shared/components/autocomplete/room-service-auto-complete'
import RoomTypeAutoComplete from 'shared/components/autocomplete/room-type-auto-complete-base'
import AppNumberField from 'shared/components/form/AppNumberField'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import { Tiny } from 'shared/styles/Typography'
import { DeleteOutlined } from '@ant-design/icons'
import ImageComponent, {
  ImageAdd,
} from 'features/admin/room/shared/components/ImageComponent'
import { Col, Row } from 'antd'
import { Fragment } from 'react/jsx-runtime'
import { ImageType } from 'features/admin/room/domain/interfaces'

interface ICreateRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
}

function CreateRoomModal({ open, setOpen }: ICreateRoomModal) {
  const {
    onSubmit,
    control,
    isPending,
    isValid,
    watch,
    handleAddImage,
    handleDeleteImage,
    handleDeleteTypeImage,
    handleAddTypeImage,
    handleChangeCustomizeLabel,
  } = useCreateRoom({
    onSuccess: () => {
      setOpen(false)
    },
  })

  const images = watch('images')

  return (
    <ModalBase
      title="Add a new room"
      open={open}
      setOpen={setOpen}
      width={1200}
    >
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

export default CreateRoomModal
