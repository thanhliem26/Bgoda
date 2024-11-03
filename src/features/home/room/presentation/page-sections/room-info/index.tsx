import { Button, Col, Divider, Image, Rate, Row } from 'antd'
import { BoxWrapper, RoomInfoWrapper } from 'features/home/room/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { CameraOutlined, CheckOutlined } from '@ant-design/icons'
import { H2, Span, Tiny } from 'shared/styles/Typography'

const RoomInfo = () => {
    const images = [
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/562569914.jpg?k=d73cbf45423d57866c3659c2726983665d6e3546c2fae4eaf641d19b33aa6dd8&o=&s=375x',
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/586319299.jpg?k=7c98dcfc4565cdb6f45d8f08f3bc9af0594323c427326f1948a9a91eddcd9fae&o=&s=375x',
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/486778919.jpg?k=ceca069262a7074e17c822ada0aa5f9bffc4fb08680e924d51e2760eb52bf4b1&o=&s=375x',
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/487559649.jpg?k=e5afabab11f188ddad38af46ed002b5caf7153ff8a194e54be81f17a6733e3a2&o=&s=375x',
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/562569706.jpg?k=13894b6aab0525131f706c93f6023bfebbaa33a3737102933a43191e79993a3d&o=&s=375x',
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/562559857.jpg?k=962b4f8ad9eba6aadfd4587a06df7859925ed12fac9a2c869b4541b901752baf&o=&s=375x',
    ]

    const service = [
        "Được phép nuôi thú nuôi",
        "Bãi để xe",
        "Wifi miễn phí trong tất cả các phòng",
        "Bể bơi, ngoài trời",
        "Dịch vù giặt là",
        "Wifi nơi công cộng",
        "Bảo vệ[24h]",
        "Dọn phòng hằng ngày"
    ]

    return (
        <RoomInfoWrapper>
            <FlexBox className="room_background">
                <FlexBox className="room_thumbnail">
                    <Box className="box-image">
                        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/562569907.jpg?k=2d97bc7413decf12bd3aae3a623140db5a6bd7dced24667a129d7fbff01edb77&o=&s=375x" />
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
                        {images.map((item) => {
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
                <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                    <H2>
                        Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment
                    </H2>
                    <Rate style={{ fontSize: '16px' }} value={4} />
                </FlexBox>
                <FlexBox>
                    <Tiny>
                        720A Đường Điện Biên Phủ, Bình Thạnh, Hồ Chí Minh, Việt Nam
                    </Tiny>
                </FlexBox>
                <Divider style={{ margin: '10px 0' }} />
                <FlexBox>
                    Nằm ở vị trí trung tâm tại Bình Thạnh của Hồ Chí Minh, chỗ nghỉ này
                    đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Chỗ
                    nghỉ 4 sao này được trang bị các tiện nghi ngay trong khuôn viên để
                    nâng cao chất lượng và niềm vui cho kỳ nghỉ của quý khách.
                </FlexBox>
            </BoxWrapper>

            <BoxWrapper className="room_service">
                <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                    <H2>
                        Tiện nghi
                    </H2>
                </FlexBox>
                <Box style={{ marginTop: '16px' }}>
                    <Row gutter={[16, 16]}>

                        {service.map((item) => {
                            return <Col span={6} key={item}>
                                <FlexBox gap={8}>
                                    <CheckOutlined />
                                    <Tiny style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>{item}</Tiny>
                                </FlexBox>
                            </Col>
                        })}

                    </Row>
                </Box>
                <Divider style={{ margin: '10px 0' }} />
                <Box style={{marginTop: '20px'}}>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <BoxWrapper gap={8}>
                                <Span style={{fontSize: '14px', lineHeight: '20px', fontWeight: 500, color: 'rgb(42, 42, 46)'}}>Phòng tắm và vật dụng phòng tắm</Span>
                                <Span style={{fontSize: '12px', lineHeight: '16px', fontWeight: 400, color: 'rgb(115, 115, 115)'}}>Các loại khăn, máy sấy tóc, phòng tắm riêng. Vật dụng tắm rửa</Span>
                            </BoxWrapper>
                        </Col>
                        <Col span={12}>
                            <BoxWrapper gap={8}>
                                <Span style={{fontSize: '14px', lineHeight: '20px', fontWeight: 500, color: 'rgb(42, 42, 46)'}}>Phòng tắm và vật dụng phòng tắm</Span>
                                <Span style={{fontSize: '12px', lineHeight: '16px', fontWeight: 400, color: 'rgb(115, 115, 115)'}}>Các loại khăn, máy sấy tóc, phòng tắm riêng. Vật dụng tắm rửa</Span>
                            </BoxWrapper>
                        </Col>

                    </Row>

                </Box>
            </BoxWrapper>
        </RoomInfoWrapper>
    )
}

export default RoomInfo
