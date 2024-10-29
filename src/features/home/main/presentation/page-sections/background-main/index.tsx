import React, { useRef, useState } from 'react'
import AppTextField from 'shared/components/form/AppTextField'
import { Box, FlexBox } from 'shared/styles'
import { H1, H6, Span, Tiny } from 'shared/styles/Typography'
import styled, { keyframes } from 'styled-components'
import { CalendarOutlined, DownOutlined, HomeOutlined, SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, DatePicker, Divider, Dropdown, Flex, Menu, MenuProps, Popover } from 'antd'
import AppButton from 'shared/components/AppButton'

const fadein = keyframes`
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  `

const SectionBackground = styled.section`
  width: 100%;

  & .background-image-wrapper {
    width: 100%;
    height: 320px;
    position: absolute;
    left: 0px;
    right: 0px;

    &::before {
      background: url('static/background/bg-agoda-homepage.png') center center /
        cover no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      border-bottom-left-radius: 48px;
    }
  }

  & .background-title {
    display: flex;
    justify-content: center;

    & .TileContainer__wrapper {
      max-width: 1124px;
      padding-top: 40px;

      & .WelcomeMessage {
        color: #fff;
        position: relative;
        margin-bottom: 16px;

        & h1 {
          animation: fadein 1s;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          margin-top: 0;
          overflow: hidden;
          text-transform: uppercase;
        }
      }
    }
  }

  & .background-filter {
    width: 100%;
    position: relative;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-top: 20px;

    & .inner-background {
      animation: ${fadein} 0.3s;
      min-width: 580px;
      width: 100%;
      display: flex;
      justify-content: center;

      & .inner-background-modal {
        background-color: #f8f7f9;
        padding: 32px 48px 48px;
        width: 100%;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;
        border-radius: 16px;
        max-width: 1124px;
        padding-top: 24px;
      }
    }
  }
`

const SearchField = styled(Box)`
  position: relative;

  & .anticon-search {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 20px;
    color: grey;
  }

  & .ant-input {
    padding: 0 40px;
  }
`

const BoxWrapper = styled(Box)`
    box-shadow: none;
    font-size: 16px;
    height: 66px;
    padding: 0 10px;
    cursor: pointer;
    width: 100%;
    background: white;
    border: 1px solid #dddfe2;
    border-radius: 8px;
`

const HotelWrapper = styled(FlexBox)`
    width: 950px;
    position: relative;
    top: -40px;

    & .item_menu {
        margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 64px;
    padding-right: 64px;
    width: auto;
    left: auto;
    z-index: 1;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 2px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    width: 100%;

    }
`

const { RangePicker } = DatePicker

const BackgroundMain = () => {
    const [open, setOpen] = useState(false)
    const handleButtonClick = () => {
        setOpen(true)
    }

    return (
        <SectionBackground>
            <Box className="background-image-wrapper"></Box>
            <Box className="background-title">
                <Box className="TileContainer__wrapper">
                    <Box className="WelcomeMessage">
                        <H1>Rong chơi bốn phương, giá vẫn "yêu thương"</H1>
                    </Box>
                </Box>
            </Box>
            <FlexBox className="background-filter">
                <Box className="inner-background">
                    <FlexBox className="inner-background-modal" style={{ flexDirection: 'column', gap: '20px' }}>
                        <HotelWrapper>
                            <Box className='item_menu'>
                                <FlexBox style={{ padding: '15px 0 0', gap: '2px', borderBottom: '4px solid rgb(32, 103, 218)' }}>
                                    <HomeOutlined style={{ color: 'rgb(32, 103, 218)' }} />
                                    <H6 style={{ color: 'rgb(83, 146, 249', fontSize: '16px', fontWeight: 400 }}>Khách sạn</H6>
                                </FlexBox>
                            </Box>
                        </HotelWrapper>
                        <SearchField>
                            <SearchOutlined />
                            <AppTextField style={{ height: '50px' }} />
                        </SearchField>
                        <FlexBox gap={'16px'}>
                            <BoxWrapper style={{ display: 'flex', alignItems: 'center' }} onClick={handleButtonClick}>
                                <RangePicker
                                    open={open}
                                    onOpenChange={(status) => setOpen(status)}
                                    style={{ width: 0, overflow: 'hidden', padding: 0 }}
                                />
                                <FlexBox style={{ width: '100%', gap: '16px' }}>
                                    <CalendarOutlined />
                                    <FlexBox style={{ flexDirection: 'column' }}>
                                        <Tiny style={{ color: '2a2a2e', fontSize: '16px', fontWeight: 400 }}>16 tháng 11 năm 2024</Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>Thứ bảy</Span>
                                    </FlexBox>
                                </FlexBox>
                                <Divider type="vertical" style={{ background: '#dcd1d1', height: '70%' }} />
                                <FlexBox style={{ width: '100%', gap: '16px' }}>
                                    <CalendarOutlined />
                                    <FlexBox style={{ flexDirection: 'column' }}>
                                        <Tiny style={{ color: '2a2a2e', fontSize: '16px', fontWeight: 400 }}>16 tháng 11 năm 2024</Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>Thứ bảy</Span>
                                    </FlexBox>
                                </FlexBox>
                            </BoxWrapper>

                            <Popover content={<RenderRoomType />} trigger="click">
                                <BoxWrapper style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <FlexBox style={{ gap: '16px' }}>
                                        <UsergroupAddOutlined />
                                        <Tiny style={{ color: '2a2a2e', fontSize: '16px', fontWeight: 400 }}>Phòng đơn</Tiny>
                                    </FlexBox>
                                    <FlexBox>
                                        <DownOutlined />
                                    </FlexBox>
                                </BoxWrapper>
                            </Popover>

                        </FlexBox>

                        <FlexBox style={{position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)'}}>
                            <AppButton style={{height: '64px', padding: '10px 100px'}}>
                                Tìm kiếm khách sạn phù hợp
                            </AppButton>
                        </FlexBox>
                    </FlexBox>
                </Box>
            </FlexBox>
        </SectionBackground>
    )
}

export default BackgroundMain

const MenuComponent = styled(FlexBox)`
    flex-direction: column;
    width: 200px;
    gap: 2px;

& .menu_item {
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
}
 
`

const RenderRoomType = () => {
    return <MenuComponent style={{ flexDirection: 'column', width: '200px', gap: '2px' }}>
        <Box className='menu_item'>
            Phòng đơn
        </Box>
        <Box className='menu_item'>
            Phòng đôi
        </Box>
        <Box className='menu_item'>
            Phòng gia đình
        </Box>
    </MenuComponent>
}
