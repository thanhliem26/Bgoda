import { Span, Tiny } from 'shared/styles/Typography'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import { Fragment} from 'react'
import useGetBooked from '../../hooks/useGetBooked'
import { FlexBox, Box } from 'shared/styles'
import { BoxWrapper } from '../../shared/style'
import { convertCurrency } from 'shared/utils/convert-string'
import { useNavigate } from 'react-router-dom'

function BookedRoom() {
  const navigate = useNavigate()
  const { roomBooked } = useGetBooked()

  return (
    <Fragment>
      <FlexBox style={{ width: '100%', justifyContent: 'center', gap: '16px' }}>
        <FlexBox
          style={{
            marginTop: '50px',
            width: '1124px',
            maxWidth: '100%',
            gap: '16px',
            marginBottom: '50px',
            flexDirection: 'column'
          }}
        >
          {roomBooked?.map((booking) => {
            return (
              <BoxWrapper onClick={() => {
                navigate(`/city/room/${booking?.roomId}`)
              }} style={{ flexDirection: 'row', gap: '20px', cursor: 'pointer' }}>
                <Box>
                  <img
                    style={{
                      width: '200px',
                      height: '150px',
                      objectFit: 'cover',
                    }}
                    src={booking?.roomDetail?.thumbnail}
                  />
                </Box>
                <FlexBox style={{ flexDirection: 'column', gap: 8, flex: 1 }}>
                  <FlexBox style={{ gap: '10px' }}>
                    <Span style={{ color: '#999' }}>Name:</Span>
                    <Tiny>{booking?.name}</Tiny>
                  </FlexBox>
                  <FlexBox style={{ gap: '10px' }}>
                    <Span style={{ color: '#999' }}>Total price:</Span>
                    <Tiny>{convertCurrency(booking?.totalPrice)} VND</Tiny>
                  </FlexBox>
                  <FlexBox style={{ gap: '10px' }}>
                    <Span style={{ color: '#999' }}>CheckIn:</Span>
                    <Tiny>{dayjs(booking?.checkInDate).format('DD-MM-YYYY')}</Tiny>
                  </FlexBox>
                  <FlexBox style={{ gap: '10px' }}>
                    <Span style={{ color: '#999' }}>CheckOut:</Span>
                    <Tiny>{dayjs(booking?.checkOutDate).format('DD-MM-YYYY')}</Tiny>
                  </FlexBox>
                  <FlexBox style={{ gap: '10px' }}>
                    <Span style={{ color: '#999' }}>Approved:</Span>
                    <Tiny style={{ color: '#4096ff' }}>{booking?.approved ? 'Approved' : 'Not approved'}</Tiny>
                  </FlexBox>
                </FlexBox>
              </BoxWrapper>
            )
          })}
        </FlexBox>
      </FlexBox>
    </Fragment>
  )
}

export default BookedRoom
