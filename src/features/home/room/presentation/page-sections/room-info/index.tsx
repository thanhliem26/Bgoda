import { Button, Col, Divider, Image, Progress, Rate, Row } from 'antd'
import { BoxWrapper, RoomInfoWrapper } from 'features/home/room/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { CameraOutlined, EditOutlined } from '@ant-design/icons'
import { H2, H3, Span, Tiny } from 'shared/styles/Typography'
import { useNavigate, useParams } from 'react-router-dom'
import useGetInfoRoom from 'features/home/room/hooks/useGetRoomDetail'
import { useEffect, useMemo, useState } from 'react'
import { isEmpty } from 'lodash'
import { getServiceByValue } from 'features/admin/service-room/shared/components/SelecIcon'
import RoomComponent from '../room-component'
import PreviewImageRoomModal from '../modal-image'
import useGetRoomBusinessPartner from 'features/home/room/hooks/useGetRoomBusinessPartner'
import { convertDiscountPrice } from 'shared/utils/number'
import { convertCurrency } from 'shared/utils/convert-string'
import CreateRatingModal from '../modal-rating'
import useGetRating from 'features/home/room/hooks/useGetRating'
import dayjs from 'dayjs'
import UpdateRatingModal from '../modal-rating-update'
import useAuth from 'features/authorization/hooks/useAuth'

const RoomInfo = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [openRating, setOpenRating] = useState<boolean>(false)
  const [openUpdateRating, setOpenUpdateRating] = useState<boolean>(false)

  const [dataUpdate, setDataUpdate] = useState({ id: 0, comment: '' })
  const { authState } = useAuth()

  const { id } = useParams()
  const { roomInfo } = useGetInfoRoom({ id: id as string })
  const { ratingList } = useGetRating({ id: id as string })

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

  const navigate = useNavigate()

  const getPercentRate = (rating: number) => {
    const ratingFilter = ratingList.filter((item) => item?.rate === rating);
    return Math.round((ratingFilter.length / ratingList.length) * 100)
  }

  const ratingPreview = useMemo(() => {
    if (ratingList.length === 0) return 5;
    const rating = ratingList.reduce((current, next) => {
      return current + next.rate
    }, 0)

    return (rating / (ratingList.length)).toFixed(1)
  }, [ratingList])

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
          <FlexBox style={{ flexDirection: 'column' }}>
            <Tiny
              style={{ fontSize: '22px', color: '#e12d2d' }}
            >
              {convertCurrency(
                convertDiscountPrice(roomInfo?.price, roomInfo?.defaultDiscount)
              )}{' '}
              ₫
            </Tiny>
            {authState === 'IS_AUTHENTICATED' && <Button onClick={() => {
              navigate(`/room/booking/${id}`)
            }} style={{ background: '#2067da', color: 'white' }}> Đặt phòng</Button>}

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

      <BoxWrapper className='feedback'>
        <FlexBox style={{ gap: 16 }}>
          <H3>Đánh giá</H3>
          {authState === 'IS_AUTHENTICATED' && <Button onClick={() => {
            setOpenRating(true)
          }} style={{ background: '#2067da', color: 'white' }}>Đánh giá</Button>}

        </FlexBox>
        <FlexBox style={{ gap: 16, alignItems: 'center' }}>
          <FlexBox style={{ alignItems: 'center', gap: 8 }}>
            <Rate value={Number(ratingPreview)} allowHalf disabled />
            <H3 style={{ fontSize: '25px', fontWeight: 700 }}>{ratingPreview}</H3>
          </FlexBox>
          <FlexBox style={{ color: '#707070', gap: 8 }}>
            <Tiny>{ratingList?.length} rating</Tiny>
          </FlexBox>
        </FlexBox>

        <FlexBox className='feedback_progress'>
          <FlexBox style={{ width: '50%' }}>
            <Tiny className='progress_title'>5 stars</Tiny>
            <Progress strokeColor={'#e87400'} className='line_progress' percent={getPercentRate(5)} />
          </FlexBox>
          <FlexBox style={{ width: '50%' }}>
            <Tiny className='progress_title'>4 stars</Tiny>
            <Progress strokeColor={'#e87400'} className='line_progress' percent={getPercentRate(4)} />
          </FlexBox>
          <FlexBox style={{ width: '50%' }}>
            <Tiny className='progress_title'>3 stars</Tiny>
            <Progress strokeColor={'#e87400'} className='line_progress' percent={getPercentRate(3)} />
          </FlexBox>
          <FlexBox style={{ width: '50%' }}>
            <Tiny className='progress_title'>2 stars</Tiny>
            <Progress strokeColor={'#e87400'} className='line_progress' percent={getPercentRate(2)} />
          </FlexBox>
          <FlexBox style={{ width: '50%' }}>
            <Tiny className='progress_title'>1 stars</Tiny>
            <Progress strokeColor={'#e87400'} className='line_progress' percent={getPercentRate(1)} />
          </FlexBox>
        </FlexBox>

        <FlexBox className='feedback_review' style={{ flexDirection: 'column', gap: 20 }}>
          {ratingList?.map((rating) => {
            return <FlexBox className='feedback_review_item'>
              <Box className='box_image'>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={rating?.avatar} />
              </Box>
              <FlexBox className='box_review'>
                <FlexBox style={{ gap: 8 }}>
                  <Tiny className='box_review_name'>{rating?.fullName}</Tiny>
                  {/* {rating?.updateAble && <EditOutlined  onClick={() => {
                  setOpenUpdateRating(true)
                  setDataUpdate({
                    id: Number(rating?.id),
                    comment: rating?.comment
                  })
                }}/>} */}
                </FlexBox>
                <Rate disabled className='box_review_rate' value={rating?.rate} />
                <Tiny className='box_review_date'>{dayjs(rating?.lastUpdatedDate).format('YYYY-MM-DD HH:mm')}</Tiny>
                <Tiny className='box_description'>
                  {rating?.comment}
                </Tiny>
              </FlexBox>
            </FlexBox>
          })}
        </FlexBox>
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

      {openRating && (<CreateRatingModal open={openRating} setOpen={setOpenRating} roomId={Number(id)} />)}
      {openUpdateRating && (<UpdateRatingModal id={dataUpdate?.id} comment={dataUpdate?.comment} open={openUpdateRating} setOpen={setOpenUpdateRating} />)}
    </RoomInfoWrapper>
  )
}

export default RoomInfo
