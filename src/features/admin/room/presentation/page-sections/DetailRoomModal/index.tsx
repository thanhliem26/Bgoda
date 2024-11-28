import { Col, Row } from 'antd'
import { WrapperAvatar } from 'features/admin/business-partner/shared/styles'
import useDetailRoom from 'features/admin/room/hooks/useDetailRoom'
import ImageComponent from 'features/admin/room/shared/components/ImageComponent'
import { Fragment } from 'react/jsx-runtime'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import styled from 'styled-components'

interface IDetailRoomModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

const SpanField = styled(Span)`
      font-size: 12px;
    font-weight: 500;
    line-height: 14.63px;
    white-space: break-spaces;
    color: rgb(77, 96, 122);
`

const TinyValue = styled(Tiny)`
  
  font-size: 13px;
    font-weight: 600;
    line-height: 15.85px;
    white-space: break-spaces;
    color: rgb(11, 14, 30);
`

const BoxDescription = styled(Box)`

  & img {
    width: 100%
  }
`

function DetailRoomModal({ open, setOpen, id }: IDetailRoomModal) {
  const { room } = useDetailRoom({ id });

  return (
    <ModalBase title="Detail room" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
          <WrapperAvatar>
            <Box className="image_wrapper">
              <label htmlFor="image_background">
                <img
                  src={room?.thumbnail ? room?.thumbnail : '/static/avatar/avatar_support.jpg'}
                  alt="avatar supporting"
                />
              </label>
            </Box>
          </WrapperAvatar>
        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{room?.name}</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Room Type</SpanField>
            <Box>
              <TinyValue>{room?.roomTypeId}</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Price</SpanField>
            <Box>
              <TinyValue>{convertCurrency(room?.price)} VND</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Discount</SpanField>
            <Box>
              <TinyValue>{room?.defaultDiscount} %</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Available</SpanField>
            <Box>
              <TinyValue>{room?.avaiable}</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Service</SpanField>
            <Box>
              <TinyValue>{room?.services?.map((item) => item.name).join(', ')}</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

        <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
          <FlexBox style={{ flexDirection: 'column', gap: '8px' }}>
            {room?.images?.map((item, index) => {
              return (
                <FlexBox
                  key={index}
                  style={{ flexDirection: 'column', gap: '8px' }}
                >
                  <FlexBox
                    style={{ width: '100%', gap: '20px', alignItems: 'center' }}
                  >
                    <Fragment>
                        <Tiny style={{ fontSize: '16px', fontWeight: 500 }}>
                          {item.type}
                        </Tiny>
                      
                      </Fragment>
                  </FlexBox>
                  <Row gutter={[16, 16]}>
                    {item.urls.map((itemImage) => {
                      return (
                        <Col key={itemImage} span={12} sm={8} lg={6} >
                          <ImageComponent
                            url={itemImage as string}
                          />
                        </Col>
                      )
                    })}
                  </Row>
                </FlexBox>
              )
            })}
          </FlexBox>
        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1,
              width: '100%'
            }}
          >
            <SpanField>Description</SpanField>
            <BoxDescription style={{width: '100%'}} dangerouslySetInnerHTML={{ __html: room?.description }}>
            </BoxDescription>
          </FlexBox>

        </FlexBox>

      </FlexBox>
      <ModalFooter>
        <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
      </ModalFooter>
    </ModalBase>
  )
}

export default DetailRoomModal
