import { Checkbox, Col, Rate, Row } from 'antd'
import MainWrapperContext from 'features/home/room-province/context'
import { ListRoomWrapper } from 'features/home/room-province/shared/style'
import { useContext } from 'react'
import { Box, FlexBox } from 'shared/styles'
import { H2, H3, Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

const options_star = [
  {
    value: 5,
    label: '5 sao',
  },
  {
    value: 4,
    label: '4 sao',
  },
  {
    value: 3,
    label: '3 sao',
  },
  {
    value: 2,
    label: '2 sao',
  },
  {
    value: 1,
    label: '1 sao',
  },
]

const ListRoom = () => {
  const { state, action } = useContext(MainWrapperContext)
  const { optionListRoomProvince, hasMore, rateList } = state
 
  const { onChangeRateList, fetchNextRoom } = action
  const { provinceData, rooms } = optionListRoomProvince

  const navigate = useNavigate()

  return (
    <ListRoomWrapper>
      <Box className="room-title">
        <H2>Các khách sạn tốt nhất {provinceData?.name}</H2>
      </Box>
      <FlexBox className="room-list">
        <FlexBox className="room-star">
          <FlexBox
            style={{
              border: '1px solid #d7d7db',
              padding: '16px',
              borderRadius: '4px',
              width: '100%',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box>
              <Tiny>Đánh giá sao</Tiny>
            </Box>
            <Checkbox.Group
              style={{ width: '100%' }}
              onChange={(data) => {
                onChangeRateList(data)
              }}
              value={rateList}
            >
              <Row gutter={[10, 10]}>
                {options_star.map((item) => {
                  return (
                    <Col span={24}>
                      <Checkbox value={item?.value}>{item?.label}</Checkbox>
                    </Col>
                  )
                })}
              </Row>
            </Checkbox.Group>
          </FlexBox>
        </FlexBox>
        <FlexBox className="room-city">
          <InfiniteScroll
            dataLength={optionListRoomProvince?.rooms?.length}
            next={fetchNextRoom}
            hasMore={hasMore}
            loader={<></>}
          >
            {rooms.map((room) => {
              const newPrice = Math.round(
                room?.price - (room?.price * room?.defaultDiscount) / 100
              )

              //@ts-ignore
              const images: string[] =
                room?.images?.length > 8
                  ? room?.images.slice(0, 8)
                  : room?.images

              return (
                <FlexBox className="room-item" style={{marginBottom: '20px'}} onClick={() => {
                  navigate(`/city/room/${room?.id}`)
                }}>
                  <FlexBox className="room__item-image">
                    <Box>
                      <img
                        style={{
                          width: '252px',
                          height: '200px',
                          borderRadius: '4px 4px 0px 0px',
                        }}
                        src={room?.thumbnail}
                      />
                    </Box>
                    <Box style={{ overflow: 'hidden' }}>
                      <Row gutter={[16, 16]}>
                        {images?.map((item) => {
                          return (
                            <Col span={6}>
                              <img
                                style={{
                                  width: '62px',
                                  height: '45px',
                                  objectFit: 'cover',
                                }}
                                src={item}
                              />
                            </Col>
                          )
                        })}
                      </Row>
                    </Box>
                  </FlexBox>
                  <FlexBox className="room__item-description">
                    <H3>{room?.name}</H3>
                    <FlexBox style={{ gap: '8px', flexDirection: 'column' }}>
                      <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                        <Rate
                          style={{ fontSize: '13px' }}
                          disabled
                          value={room?.star}
                        />
                        <Tiny style={{ color: '#5392f9' }}>
                          {room?.province} {room?.district} {room?.address}
                        </Tiny>
                      </FlexBox>
                      <Tiny>Available room: {room?.avaiable}</Tiny>
                      <FlexBox className="room_description">
                        <Span>Mô tả</Span>
                        <Tiny
                          dangerouslySetInnerHTML={{
                            __html: room?.description,
                          }}
                        ></Tiny>
                      </FlexBox>
                    </FlexBox>
                    <FlexBox
                      style={{
                        marginTop: 'auto',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                      }}
                    >
                      <FlexBox
                        style={{
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                        }}
                      >
                        <Tiny
                          style={{
                            fontWeight: 500,
                            fontSize: '10px',
                            lineHeight: '14px',
                            color: 'rgb(144, 148, 156)',
                          }}
                        >
                          Giá trung bình mỗi đêm
                        </Tiny>
                        <Span
                          style={{
                            color: room?.defaultDiscount ? '#737373' : 'black',
                            fontWeight: 'bold',
                            fontSize: room?.defaultDiscount ? '18px' : '24px',
                            textDecoration: room?.defaultDiscount
                              ? 'line-through'
                              : 'auto',
                            textDecorationColor: 'red',
                          }}
                        >
                          {convertCurrency(room?.price)} ₫
                        </Span>
                      </FlexBox>

                      {!!room?.defaultDiscount && (
                        <FlexBox
                          style={{
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                          }}
                        >
                          <Tiny
                            style={{
                              fontWeight: 'bold',
                              background: 'red',
                              color: 'white',
                              padding: '5px 10px',
                            }}
                          >
                            Giảm {room?.defaultDiscount}%
                          </Tiny>
                          <Span
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              fontSize: '24px',
                            }}
                          >
                            {convertCurrency(newPrice)} ₫
                          </Span>
                        </FlexBox>
                      )}
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              )
            })}
          </InfiniteScroll>
          {/* {rooms.map((room) => {
            const newPrice = Math.round(
              room?.price - (room?.price * room?.defaultDiscount) / 100
            )

            //@ts-ignore
            const images: string[] = room?.images?.length > 8 ? room?.images.slice(0, 8) : room?.images;

            return (
              <FlexBox className="room-item">
                <FlexBox className="room__item-image">
                  <Box>
                    <img
                      style={{
                        width: '252px',
                        height: '200px',
                        borderRadius: '4px 4px 0px 0px',
                      }}
                      src={room?.thumbnail}
                    />
                  </Box>
                  <Box style={{ overflow: 'hidden' }}>
                    <Row gutter={[16, 16]}>
                      {images?.map((item) => {
                        return (
                          <Col span={6}>
                            <img
                              style={{
                                width: '62px',
                                height: '45px',
                                objectFit: 'cover',
                              }}
                              src={item}
                            />
                          </Col>
                        )
                      })}
                    </Row>
                  </Box>
                </FlexBox>
                <FlexBox className="room__item-description">
                  <H3>{room?.name}</H3>
                  <FlexBox style={{ gap: '8px', flexDirection: 'column' }}>
                    <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                      <Rate
                        style={{ fontSize: '13px' }}
                        disabled
                        value={room?.star}
                      />
                      <Tiny style={{ color: '#5392f9' }}>
                        {room?.province} {room?.district} {room?.address}
                      </Tiny>
                    </FlexBox>
                    <Tiny>Available room: {room?.avaiable}</Tiny>
                    <FlexBox className='room_description'>
                      <Span>Mô tả</Span>
                      <Tiny dangerouslySetInnerHTML={{ __html: room?.description }}></Tiny>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox
                    style={{
                      marginTop: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                    }}
                  >
                    <FlexBox
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Tiny
                        style={{
                          fontWeight: 500,
                          fontSize: '10px',
                          lineHeight: '14px',
                          color: 'rgb(144, 148, 156)',
                        }}
                      >
                        Giá trung bình mỗi đêm
                      </Tiny>
                      <Span
                        style={{
                          color: room?.defaultDiscount ? '#737373' : 'black',
                          fontWeight: 'bold',
                          fontSize: room?.defaultDiscount ? '18px' : '24px',
                          textDecoration: room?.defaultDiscount
                            ? 'line-through'
                            : 'auto',
                          textDecorationColor: 'red'
                        }}
                      >
                        {convertCurrency(room?.price)} ₫
                      </Span>
                    </FlexBox>

                    {!!room?.defaultDiscount && (
                      <FlexBox
                        style={{
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                        }}
                      >
                        <Tiny
                          style={{
                            fontWeight: 'bold',
                            background: 'red',
                            color: 'white',
                            padding: '5px 10px',
                          }}
                        >
                          Giảm {room?.defaultDiscount}%
                        </Tiny>
                        <Span
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '24px',
                          }}
                        >
                          {convertCurrency(newPrice)} ₫
                        </Span>
                      </FlexBox>
                    )}
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            )
          })} */}
        </FlexBox>
      </FlexBox>
    </ListRoomWrapper>
  )
}

export default ListRoom
