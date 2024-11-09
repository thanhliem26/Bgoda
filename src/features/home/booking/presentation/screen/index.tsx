import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import { BoxWrapper } from '../../shared/style'
import useCreateBooking from '../../hooks/useBooking'
import { Controller } from 'react-hook-form'
import AppTextField from 'shared/components/form/AppTextField'
import { Span, Tiny } from 'shared/styles/Typography'
import { Col, DatePicker, Rate, Row } from 'antd'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/vi'
import { Fragment, useMemo, useState } from 'react'
import useGetInfoRoom from '../../hooks/useGetRoom'
import { useParams } from 'react-router-dom'
import { getServiceByValue } from 'features/admin/service-room/shared/components/SelecIcon'
import styled from 'styled-components'
import { convertCurrency } from 'shared/utils/convert-string'
import { convertDiscountPrice } from 'shared/utils/number'
import useGetDiscountRoom from '../../hooks/useGetDiscountByRoom'
import DiscountRoomAutoComplete from 'shared/components/autocomplete/discount-of-room-auto-complete'
import AppButton from 'shared/components/AppButton'

const { RangePicker } = DatePicker

dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('vi')

const SpanIcon = styled(Span)`
  & svg {
    font-size: 16px;
  }
`

function BookingRoom() {
  const [open, setOpen] = useState(false)
  const handleButtonClick = () => {
    setOpen(true)
  }

  const { onSubmit, control, isPending, isValid, setValue, watch, getValues } =
    useCreateBooking({
      // onSuccess: () => {
      //   setOpen(false)
      // },
    })

  const { id } = useParams()
  const { roomInfo } = useGetInfoRoom({ id: id as string })
  const { discountList } = useGetDiscountRoom({ id: id as string })

  const checkInDate = getValues('checkInDate')
  const checkOutDate = getValues('checkOutDate')

  const onChangeRangeDate = (fromDate: Date, toDate: Date) => {
    if (fromDate && toDate) {
      setValue('checkInDate', fromDate)
      setValue('checkOutDate', toDate)
    }
  }

  const dayDiff = dayjs(checkOutDate).diff(checkInDate, 'day')
  const discount = roomInfo?.defaultDiscount;
  const price = roomInfo?.price;
  const discountSelect = watch('couponId');

  const priceDiscountDefault = useMemo(() => {
    const discountApply = discountList.find((item) => Number(item?.id) == discountSelect);
    let discountDefault = convertDiscountPrice(price * dayDiff, discount);
    let labelApply = '';

    if (!discountApply) return { price: convertCurrency(Math.round(discountDefault)), labelApply: labelApply };

    if (discountApply?.discountType === 0) {
      discountDefault = discountDefault - discountApply?.discountValue;
      labelApply = `${convertCurrency(discountApply?.discountValue)} VND`;
    }

    if (discountApply?.discountType === 1) {
      const priceDiscount = (price * discountApply?.discountValue) / 100;
      const discountDownApply = priceDiscount > discountApply?.discountMax ? discountApply?.discountMax : priceDiscount;

      discountDefault = discountDefault - discountDownApply;
      labelApply = `${discountApply?.discountValue}% (${convertCurrency(discountDownApply)} VND)`;
    }

    return {
      price: convertCurrency(Math.round(discountDefault)),
      labelApply: labelApply
    }
  }, [discountSelect, dayDiff, roomInfo]);

  return (
    <Fragment>
      <FlexBox style={{ width: '100%', justifyContent: 'center', gap: '16px' }}>
        <FlexBox
          style={{
            marginTop: '10px',
            width: '1124px',
            maxWidth: '100%',
            gap: '16px',
            marginBottom: '50px',
          }}
        >
          <FlexBox
            style={{
              flex: 1,
              width: '100%',
              height: 'fit-content',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <BoxWrapper className="form_user" style={{ width: '100%' }}>
              <legend style={{ fontWeight: 600, fontSize: '20px' }}>
                Vui lòng điền thông tin liên hệ
              </legend>
              <FlexBox
                style={{
                  flexDirection: 'column',
                  gap: '8px',
                  marginTop: '16px',
                }}
              >
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
                          <HelperTextForm>
                            {fieldState.error?.message}
                          </HelperTextForm>
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
                      name="phoneNumber"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <AppTextField
                            label="Phone number"
                            required
                            value={field.value}
                            onChange={field.onChange}
                          />
                          <HelperTextForm>
                            {fieldState.error?.message}
                          </HelperTextForm>
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
                      name="email"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <AppTextField
                            label="Email"
                            disabled={true}
                            required
                            value={field.value}
                            onChange={field.onChange}
                          />
                          <HelperTextForm>
                            {fieldState.error?.message}
                          </HelperTextForm>
                        </FlexBox>
                      )}
                    />
                  </FormControl>
                </FlexBox>
              </FlexBox>
            </BoxWrapper>

            <BoxWrapper>
              <Tiny> Mã giảm giá cho phòng</Tiny>

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
                    name="couponId"
                    render={({ field, fieldState }) => (
                      <FlexBox style={{ flexDirection: 'column' }}>
                        <DiscountRoomAutoComplete
                          id={id as string}
                          label='Select discount'
                          value={field?.value}
                          onChange={(data) => {
                            field.onChange(data?.value)
                          }}
                        />
                        <HelperTextForm>
                          {fieldState.error?.message}
                        </HelperTextForm>
                      </FlexBox>
                    )}
                  />
                </FormControl>
              </FlexBox>
            </BoxWrapper>

            <BoxWrapper style={{ background: '#f9f9f9' }}>
              {discount ? <FlexBox>
                <Box
                  style={{
                    background: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    position: 'relative',
                    left: '-20px',
                    marginBottom: '8px',
                  }}
                >
                  <Tiny>Giảm {discount}% hôm nay</Tiny>
                </Box>
              </FlexBox> : ''}
              <FlexBox style={{ flexDirection: 'column', gap: 4 }}>
                {discount ? <FlexBox
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <Span>Giá gốc (1 phòng x {dayDiff} đêm)</Span>
                  <Span style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>{convertCurrency(price * dayDiff)} ₫</Span>
                </FlexBox> : ''}

                {priceDiscountDefault?.labelApply && <FlexBox
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <Span>Mã giảm giá</Span>
                  <Span>{priceDiscountDefault?.labelApply} ₫</Span>
                </FlexBox>}


                <FlexBox
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <Span>Giá phòng (1 phòng x {dayDiff} đêm)</Span>
                  <Span>{priceDiscountDefault?.price} ₫</Span>
                </FlexBox>
              </FlexBox>
            </BoxWrapper>

            <FlexBox>
              <AppButton style={{ width: '100%' }} disabled={isValid} onClick={onSubmit} loading={isPending}>
                Đặt phòng
              </AppButton>
            </FlexBox>
          </FlexBox>

          <FlexBox
            style={{ width: '384px', flexDirection: 'column', gap: '16px' }}
          >
            <BoxWrapper
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: 'fit-content',
              }}
              onClick={handleButtonClick}
            >
              <FlexBox>
                <FlexBox style={{ flexDirection: 'column' }}>
                  <Tiny style={{ fontWeight: 600, fontSize: '16px' }}>
                    {dayjs(checkInDate).format('dd, [tháng] MM DD')}
                  </Tiny>
                  <Span
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#5e6b82',
                    }}
                  >
                    Nhận phòng
                  </Span>
                </FlexBox>
              </FlexBox>

              <FlexBox>
                <FlexBox style={{ flexDirection: 'column' }}>
                  <Tiny style={{ fontWeight: 600, fontSize: '16px' }}>
                    {dayjs(checkOutDate).format('dd, [tháng] MM DD')}
                  </Tiny>
                  <Span
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#5e6b82',
                    }}
                  >
                    Trả phòng
                  </Span>
                </FlexBox>
              </FlexBox>

              <FlexBox>
                <FlexBox style={{ flexDirection: 'column' }}>
                  <Tiny style={{ fontWeight: 600, fontSize: '16px' }}>
                    {dayDiff}
                  </Tiny>
                  <Span
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#5e6b82',
                    }}
                  >
                    đêm
                  </Span>
                </FlexBox>
              </FlexBox>

              <RangePicker
                open={open}
                minDate={dayjs()}
                onOpenChange={(status) => setOpen(status)}
                style={{
                  width: 0,
                  overflow: 'hidden',
                  padding: 0,
                  border: 'none',
                }}
                value={[dayjs(checkInDate), dayjs(checkOutDate)]}
                onChange={(dateRange) => {
                  const fromDate = dateRange?.[0]?.toDate() ?? new Date()
                  const toDate = dateRange?.[1]?.toDate() ?? new Date()

                  onChangeRangeDate(fromDate, toDate)
                }}
              />
            </BoxWrapper>

            <BoxWrapper>
              <Box>
                <img
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  src={roomInfo?.thumbnail}
                />
              </Box>
              <FlexBox style={{ marginTop: '8px', flexDirection: 'column' }}>
                <Tiny
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#252c38',
                  }}
                >
                  {roomInfo?.name}
                </Tiny>
                <Tiny>
                  <Rate style={{ fontSize: '12px' }} value={roomInfo?.star} />
                </Tiny>
                <Tiny
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#252C1A',
                  }}
                >
                  {roomInfo?.province} {roomInfo?.district} {roomInfo?.address}
                </Tiny>
                <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
                  {roomInfo?.services?.map((item) => {
                    const serviceRoom = getServiceByValue(item?.icon)
                    return (
                      <Col span={24} key={item?.id}>
                        <FlexBox style={{ gap: '4px' }}>
                          <SpanIcon className="room_icon">
                            {serviceRoom?.label}
                          </SpanIcon>
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
              </FlexBox>
            </BoxWrapper>

            <BoxWrapper
              style={{ color: '#c53829', backgroundColor: '#fee9e5' }}
            >
              <Tiny>Chúng tôi còn 4 phòng như thế này</Tiny>
            </BoxWrapper>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Fragment>
  )
}

export default BookingRoom
