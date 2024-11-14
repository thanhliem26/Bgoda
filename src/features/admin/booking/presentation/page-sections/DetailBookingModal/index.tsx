import { Switch } from 'antd'
import useDetailBooking from 'features/admin/booking/hooks/useDetailBooking'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import styled from 'styled-components'

interface IDetailBookingModal {
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

function DetailBookingModal({ open, setOpen, id }: IDetailBookingModal) {
  const { booking } = useDetailBooking({
    id: id,
  })
  console.log('booking', booking)

  return (
    <ModalBase title="Detail booking" open={open} setOpen={setOpen}>
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
              <label htmlFor="image">
                <img
                  width={'100%'}
                  src={
                    discount?.image
                      ? discount?.image
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
            </Box>
          </WrapperAvatar>
        </FlexBox> */}

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{booking?.name}</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <SpanField>Phone number</SpanField>
            <Box>
              <TinyValue>
                {booking?.phoneNumber}
              </TinyValue>
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
              flex: 1,
            }}
          >
            <SpanField>Total price</SpanField>
            <Box>
              <TinyValue>{convertCurrency(booking?.totalPrice)} VND</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <SpanField>Received</SpanField>
            <Box>
              <TinyValue>
                <Switch checked={booking?.approved} />
              </TinyValue>
            </Box>
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

export default DetailBookingModal
