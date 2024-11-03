import { Checkbox, Col, Rate, Row } from 'antd';
import { ListRoomWrapper } from 'features/home/room-province/shared/style'
import React, { useState } from 'react'
import { Box, FlexBox } from 'shared/styles'
import { H2, H3, Span, Tiny } from 'shared/styles/Typography'

const options_star = [{
    value: 5,
    label: '5 sao'
}, {
    value: 4,
    label: '4 sao'
}, {
    value: 3,
    label: '3 sao'
}, {
    value: 2,
    label: '2 sao'
}, {
    value: 1,
    label: '1 sao'
},]
const ListRoom = () => {
    const [checkedList, setCheckedList] = useState<string[]>([]);
    console.log("🚀 ~ checkedList:", checkedList)
    const onChange = (list: string[]) => {
        setCheckedList(list);
    };

    const image1 = [
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562569907.jpg?k=2d97bc7413decf12bd3aae3a623140db5a6bd7dced24667a129d7fbff01edb77&s=450x450',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/487559649.jpg?k=e5afabab11f188ddad38af46ed002b5caf7153ff8a194e54be81f17a6733e3a2&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/586319299.jpg?k=7c98dcfc4565cdb6f45d8f08f3bc9af0594323c427326f1948a9a91eddcd9fae&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562569706.jpg?k=13894b6aab0525131f706c93f6023bfebbaa33a3737102933a43191e79993a3d&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/486778919.jpg?k=ceca069262a7074e17c822ada0aa5f9bffc4fb08680e924d51e2760eb52bf4b1&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562559857.jpg?k=962b4f8ad9eba6aadfd4587a06df7859925ed12fac9a2c869b4541b901752baf&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562569913.jpg?k=192c4c20aed57090b917fde017c76be7f8fc62d6ead8eaa5c6f4bdc2f787c1a6&s=100x100',
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562569711.jpg?k=be7a38cae27acdbec9a46279638864588d3bdcef0206a1cbfe9937b18db8a5b8&s=100x100',
    ]

    return (
        <ListRoomWrapper>
            <Box className='room-title'>
                <H2>Các khách sạn tốt nhất Hồ Chí Minh</H2>
            </Box>
            <FlexBox className='room-list'>
                <FlexBox className='room-star'>
                    <FlexBox style={{
                        border: '1px solid #d7d7db',
                        padding: '16px',
                        borderRadius: '4px',
                        width: '100%',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <Box><Tiny>Đánh giá sao</Tiny></Box>
                        <Checkbox.Group style={{ width: '100%' }} onChange={(data) => {
                            onChange(data)
                        }}>
                            <Row gutter={[10, 10]}>
                                {options_star.map((item) => {
                                    return <Col span={24}>
                                        <Checkbox value={item?.value}>{item?.label}</Checkbox>

                                    </Col>
                                })}
                            </Row>

                        </Checkbox.Group>
                    </FlexBox>
                </FlexBox>
                <FlexBox className='room-city'>
                    <FlexBox className='room-item'>
                        <FlexBox className='room__item-image'>
                            <Box>
                                <img style={{
                                    width: '252px',
                                    height: '200px',
                                    borderRadius: '4px 4px 0px 0px'
                                }} src='https://q-xx.bstatic.com/xdata/images/hotel/max500/562569907.jpg?k=2d97bc7413decf12bd3aae3a623140db5a6bd7dced24667a129d7fbff01edb77&s=450x450' />
                            </Box>
                            <Box style={{ overflow: 'hidden' }}>
                                <Row gutter={[16, 16]}>
                                    {image1.map((item) => {
                                        return <Col span={6} >
                                            <img style={{
                                                width: '62px',
                                                height: '45px',
                                                objectFit: 'cover'
                                            }} src={item} />
                                        </Col>
                                    })}
                                </Row>
                            </Box>

                        </FlexBox>
                        <FlexBox className='room__item-description'>

                            <H3>
                                Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment
                            </H3>
                            <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                                <Rate style={{ fontSize: '13px' }} disabled defaultValue={5} />
                                <Tiny style={{ color: '#5392f9' }}>
                                    Bình Thạnh,Hồ Chí Minh - Xem trên bản đồ
                                </Tiny>
                            </FlexBox>
                            <FlexBox style={{ marginTop: 'auto', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Tiny style={{ fontWeight: 'bold' }}>Giá trung bình mỗi đêm</Tiny>
                                <Span style={{ color: '#e12d2d', fontWeight: 'bold', fontSize: '24px' }}>1.430.053 ₫</Span>
                            </FlexBox>

                        </FlexBox>
                    </FlexBox>

                    <FlexBox className='room-item'>
                        <FlexBox className='room__item-image'>
                            <Box>
                                <img style={{
                                    width: '252px',
                                    height: '200px',
                                    borderRadius: '4px 4px 0px 0px'
                                }} src='https://q-xx.bstatic.com/xdata/images/hotel/max500/562569907.jpg?k=2d97bc7413decf12bd3aae3a623140db5a6bd7dced24667a129d7fbff01edb77&s=450x450' />
                            </Box>
                            <Box style={{ overflow: 'hidden' }}>
                                <Row gutter={[16, 16]}>
                                    {image1.map((item) => {
                                        return <Col span={6} >
                                            <img style={{
                                                width: '62px',
                                                height: '45px',
                                                objectFit: 'cover'
                                            }} src={item} />
                                        </Col>
                                    })}
                                </Row>
                            </Box>

                        </FlexBox>
                        <FlexBox className='room__item-description'>

                            <H3>
                                Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment
                            </H3>
                            <FlexBox style={{ alignItems: 'center', gap: '20px' }}>
                                <Rate style={{ fontSize: '13px' }} disabled defaultValue={5} />
                                <Tiny style={{ color: '#5392f9' }}>
                                    Bình Thạnh,Hồ Chí Minh - Xem trên bản đồ
                                </Tiny>
                            </FlexBox>
                            <FlexBox style={{ marginTop: 'auto', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Tiny style={{ fontWeight: 'bold' }}>Giá trung bình mỗi đêm</Tiny>
                                <Span style={{ color: '#e12d2d', fontWeight: 'bold', fontSize: '24px' }}>1.430.053 ₫</Span>
                            </FlexBox>

                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </ListRoomWrapper>
    )
}

export default ListRoom