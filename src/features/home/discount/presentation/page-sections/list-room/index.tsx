import { Col, Rate, Row } from 'antd'
import { ListRoomWrapper } from 'features/home/discount/shared/style'
import { Box, FlexBox } from 'shared/styles'
import {  H2, H4, Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import { useNavigate, useParams } from 'react-router-dom'
import useGetRoomByDiscount from 'features/home/discount/hooks/useGetRoomByDiscount'
import { useContext } from 'react'
import MainWrapperContext from 'features/home/discount/context'

const ListRoom = () => {
  const { discountInfo } = useContext(MainWrapperContext)

  const { id } = useParams()
  const { roomByDiscount } = useGetRoomByDiscount({ id: id as string });
  const navigate = useNavigate();

  return (
    <ListRoomWrapper>
      <FlexBox className="room-list" style={{ width: '100%' }}>
        <Box style={{ width: '100%' }}>
          <Row gutter={[16, 16]}>
            {roomByDiscount?.map((room) => {
              return <Col span={6} key={room?.id}>
                <FlexBox
                  onClick={() => {
                    navigate(`/city/room/${room?.id}`)
                  }}
                  style={{
                    flexDirection: 'column',
                    gap: '4px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.2)',
                    height: '425px',
                    maxHeight: '425px',
                    overflow: 'hidden',
                  }}
                >
                  <Box style={{ width: '100%', overflow: 'hidden' }}>
                    <img
                      style={{
                        width: '100%',
                        height: '170px',
                        objectFit: 'cover',
                      }}
                      src={room?.thumbnail}
                    />
                  </Box>
                  <FlexBox style={{ flexDirection: 'column', gap: '4px', flex: 1, padding: '8px 12px' }}>
                    <H4>{room?.name}</H4>
                    <FlexBox style={{ gap: 4, alignItems: 'center' }}>
                      <Rate style={{ fontSize: '12px', width: '155px' }} value={room?.star} />
                      <Span
                        style={{
                          color: '#5392f9',
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%'
                        }}
                      >
                        {room?.province} {room?.district} {room?.address}
                      </Span>
                    </FlexBox>
                    <FlexBox>
                      <Tiny>Available {room?.avaiable}</Tiny>
                    </FlexBox>
                    <FlexBox
                      style={{
                        flexDirection: 'column',
                        marginTop: 'auto',
                        gap: 2,
                        alignItems: 'flex-end',

                      }}
                    >
                      <Tiny style={{ fontSize: '12px', color: '#737373' }}>
                        Giá mỗi đêm
                      </Tiny>
                      <Span
                        style={{
                          fontSize: '24px',
                          color: '#e12d2d',
                          fontWeight: 500,
                        }}
                      >
                        ₫ {convertCurrency(room?.price)}
                      </Span>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </Col>

            })}
          </Row>
        </Box>
      </FlexBox>
      <FlexBox style={{marginTop: 20, flexDirection: 'column', gap: 8}}>
        <H2>Mô tả</H2>
       <FlexBox style={{flexDirection: 'column'}}>
       <Box dangerouslySetInnerHTML={{__html: discountInfo?.description as string}}></Box>
       </FlexBox>
      </FlexBox>
    </ListRoomWrapper>
  )
}

export default ListRoom
