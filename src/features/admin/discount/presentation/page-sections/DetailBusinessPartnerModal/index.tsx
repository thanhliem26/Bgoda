import dayjs from 'dayjs'
import useDetailBusinessPartner from 'features/admin/discount/hooks/useDetailBusinessPartner'
import { WrapperAvatar } from 'features/admin/discount/shared/styles'
import AppButton from 'shared/components/AppButton'
import { labelDiscountType } from 'shared/components/autocomplete/discount-type-auto-complete'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import styled from 'styled-components'

interface IDetailDiscountModal {
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

function DetailDiscountModal({ open, setOpen, id }: IDetailDiscountModal) {
  const { discount } = useDetailBusinessPartner({
    id: id,
  })
  console.log('discount', discount)

  return (
    <ModalBase title="Detail discount" open={open} setOpen={setOpen}>
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
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{discount?.name}</TinyValue>
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
            <SpanField>Discount type</SpanField>
            <Box>
              <TinyValue>
                {labelDiscountType(discount?.discountType)?.label}
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
            <SpanField>Discount value</SpanField>
            <Box>
              <TinyValue>{discount?.discountValue}</TinyValue>
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
            <SpanField>Discount max</SpanField>
            <Box>
              <TinyValue>
                {convertCurrency(discount?.discountMax)} VND
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
            <SpanField>Start date</SpanField>
            <Box>
              <TinyValue>
                {dayjs(discount?.startDate).format('DD-MM-YYYY')}
              </TinyValue>
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
            <SpanField>End date</SpanField>
            <Box>
              <TinyValue>
                {dayjs(discount?.endDate).format('DD-MM-YYYY')}
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
            <SpanField>Description</SpanField>
            <Box
              dangerouslySetInnerHTML={{ __html: discount?.description }}
            ></Box>
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

export default DetailDiscountModal
