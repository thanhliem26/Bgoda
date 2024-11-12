import { Col, Rate, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import styled from 'styled-components'

const WrapperRoomComponent = styled(FlexBox)`
  flex-direction: column;
  gap: 16px;

  & .box-image {
    border-radius: 16px;
    overflow: hidden;
    height: 200px;
    max-height: 200px;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }

  & .box-text {
    flex-direction: column;

    & .room-name {
      font-size: 14px;
      font-weight: 600;
      color: #252c38;
    }

    & .room-address {
      gap: 8px;
      & .ant-rate-star {
        font-size: 13px;
        margin-inline-end: 2px;
      }

      & .address {
        font-size: 12px;
        font-weight: 600;
        color: #2067da;
      }
    }

    & .room-price {
      font-size: 16px;
      font-weight: 600;
      color: #c53829;
    }
  }
`

type DataRoom = {
  image: string
  name: string
  address: string
  price: number
  id: number
  discount?: string
}
interface IRoomComponentProps {
  data: DataRoom[]
}
const RoomComponent = ({ data }: IRoomComponentProps) => {
  const navigate = useNavigate();

  return (
    <Row gutter={[16, 16]}>

      {data.map((item, index) => {
        const discountPrice = item?.price - (Number(item?.price) * (Number(item?.discount) / 100));
        
        return <Col span={12} xs={8} md={6} key={index}>
          <WrapperRoomComponent style={{ cursor: 'pointer' }} onClick={() => {
            navigate(`/city/room/${item?.id}`)
          }}>
            <FlexBox className="box-image">
              <img
                style={{ width: '100%' }}
                src={item?.image}
              />
              {item?.discount && <FlexBox style={{
                position: 'absolute',
                zIndex: 10,
                right: 20,
                top: 10,
                width: '40px',
                height: '40px',
                backgroundColor: 'red',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}>{item?.discount}%</FlexBox>}

            </FlexBox>
            <FlexBox className="box-text">
              <Tiny className="room-name">{item?.name}</Tiny>
              <FlexBox className="room-address" style={{flexDirection: "column", gap: 4}}>
                <Span className="address">{item?.address}</Span>
                <Rate disabled defaultValue={5} />
              </FlexBox>
              <FlexBox>
                <Tiny className="room-price">{convertCurrency(discountPrice)} VND</Tiny>
              </FlexBox>
            </FlexBox>
          </WrapperRoomComponent>
        </Col>
      })}
    </Row>
  )
}

export default RoomComponent
