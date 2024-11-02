import { Checkbox, Col, Row } from 'antd';
import { ListRoomWrapper } from 'features/home/room-province/shared/style'
import React, { useState } from 'react'
import { Box, FlexBox } from 'shared/styles'
import { H2, Tiny } from 'shared/styles/Typography'

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
                        test
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </ListRoomWrapper>
    )
}

export default ListRoom