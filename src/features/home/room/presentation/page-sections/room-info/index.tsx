import { Button, Col, Divider, Image, Rate, Row } from 'antd'
import { BoxWrapper, RoomInfoWrapper } from 'features/home/room/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { CameraOutlined } from '@ant-design/icons'
import { H2, Span, Tiny } from 'shared/styles/Typography'
import { useParams } from 'react-router-dom'
import useGetInfoRoom from 'features/home/room/hooks/useGetRoomDetail'
import { useMemo, useState } from 'react'
import { isEmpty } from 'lodash'
import { getServiceByValue } from 'features/admin/service-room/shared/components/SelecIcon'
import RoomComponent from '../room-component'
import PreviewImageRoomModal from '../modal-image'
import useGetRoomBusinessPartner from 'features/home/room/hooks/useGetRoomBusinessPartner'
import { convertDiscountPrice } from 'shared/utils/number'
import { convertCurrency } from 'shared/utils/convert-string'

const RoomInfo = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { id } = useParams()
  const { roomInfo } = useGetInfoRoom({ id: id as string })
  const { roomBusinessPartner } = useGetRoomBusinessPartner({
    id: roomInfo?.businessPartnerId,
  })

  const imageRoom = useMemo(() => {
    const imageList =
      roomInfo?.images && !isEmpty(roomInfo?.images)
        ? roomInfo?.images.flatMap((item) => {
            return item?.urls
          })
        : []
    if (imageList.length <= 6) return imageList

    return imageList.slice(0, 6)
  }, [roomInfo?.images])

  const roomListBusiness = useMemo(() => {
    return roomBusinessPartner?.map((item) => {
      return {
        id: item?.id,
        address: `${item?.province} ${item?.district} ${item?.address}`,
        image: item?.thumbnail,
        name: item?.name,
        price: item?.price,
        discount: item?.defaultDiscount,
      }
    })
  }, [roomBusinessPartner])

  return (
    <RoomInfoWrapper>
      <FlexBox className="room_background">
        <FlexBox className="room_thumbnail" onClick={() => setOpen(true)}>
          <Box className="box-image">
            <img src={roomInfo?.thumbnail} />
          </Box>
          <Box className="room-btn">
            <Button>
              {' '}
              <CameraOutlined /> Xem mọi bức ảnh
            </Button>
          </Box>
        </FlexBox>
        <Box className="room_images">
          <Row gutter={[16, 16]}>
            {imageRoom.map((item) => {
              return (
                <Col span={8}>
                  <Box
                    style={{
                      width: '100%',
                      height: '144px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={item}
                    />
                  </Box>
                </Col>
              )
            })}
          </Row>
        </Box>
      </FlexBox>

      <BoxWrapper className="room_description">
        <FlexBox style={{ justifyContent: 'space-between' }}>
          <FlexBox style={{ flexDirection: 'column' }}>
            <FlexBox style={{ flexDirection: 'column' }}>
              <H2>{roomInfo?.name}</H2>
              <Rate style={{ fontSize: '12px' }} value={roomInfo?.star} />
            </FlexBox>
            <FlexBox>
              <Tiny>{roomInfo?.address}</Tiny>
            </FlexBox>
          </FlexBox>
          <FlexBox style={{flexDirection: 'column'}}>
            <Tiny
              style={{ fontSize: '22px', color: '#e12d2d'}}
            >
              {convertCurrency(
                convertDiscountPrice(roomInfo?.price, roomInfo?.defaultDiscount)
              )}{' '}
              ₫
            </Tiny>
            <Button style={{background: '#2067da', color: 'white'}}>Đặt phòng</Button>
          </FlexBox>
        </FlexBox>
        <Divider style={{ margin: '10px 0' }} />
        <Box dangerouslySetInnerHTML={{ __html: roomInfo?.description }}></Box>
      </BoxWrapper>

      <BoxWrapper className="room_service">
        <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
          <H2>Tiện nghi</H2>
        </FlexBox>
        <Box style={{ marginTop: '16px' }}>
          <Row gutter={[16, 16]}>
            {roomInfo?.services?.map((item) => {
              const serviceRoom = getServiceByValue(item?.icon)
              return (
                <Col span={6} key={item?.id}>
                  <FlexBox gap={8}>
                    {/* <CheckOutlined /> */}
                    <Span className="room_icon">{serviceRoom?.label}</Span>
                    <Tiny
                      style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        fontWeight: 500,
                      }}
                    >
                      {item?.name}
                    </Tiny>
                  </FlexBox>
                </Col>
              )
            })}
          </Row>
        </Box>
        <Divider style={{ margin: '10px 0' }} />
        <Box style={{ marginTop: '20px' }}>
          <Row gutter={[16, 16]}>
            {roomInfo?.services?.map((item) => {
              return (
                <Col span={12}>
                  <BoxWrapper gap={8}>
                    <Span
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 500,
                        color: 'rgb(42, 42, 46)',
                      }}
                    >
                      {item?.name}
                    </Span>
                    <Span
                      style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        fontWeight: 400,
                        color: 'rgb(115, 115, 115)',
                      }}
                    >
                      {item?.description}
                    </Span>
                  </BoxWrapper>
                </Col>
              )
            })}
          </Row>
        </Box>
      </BoxWrapper>

      <BoxWrapper style={{ border: 'none', padding: 0, gap: 16 }}>
        <H2>
          Phòng còn trống tại {roomInfo?.businessPartnerName}
        </H2>
        <Box>
          <RoomComponent data={roomListBusiness} />
        </Box>
      </BoxWrapper>

      {open && (
        <PreviewImageRoomModal
          images={roomInfo?.images ?? []}
          open={open}
          setOpen={(value) => setOpen(value)}
        />
      )}
    </RoomInfoWrapper>
  )
}

export default RoomInfo
