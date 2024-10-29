import { FormBodyWrapper } from 'features/home/main/shared/style'
import { useState } from 'react'
import { Box, FlexBox } from 'shared/styles'
import { H2, Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps } from 'antd'

const BoxImage = styled(Box)`
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`

const BoxWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`

const BoxTitle = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 1px;

  & p {
    font-size: 16px;
    font-weight: 600;
    color: #252c38;
  }

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #252c38;
  }
`

const SlickButtonCarousel = styled.span`
  font-size: 24px;
  color: #252c38;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  &.next_icon {
    right: -20px; // Adjust to bring the arrow into view
  }

  &.prev_icon {
    left: -20px; // Adjust to bring the arrow into view
  }
`;


const AttractiveLocation = () => {
  //@ts-ignore
  const SlickButton = ({ currentSlide, slideCount, children, ...props }) => {
    return <SlickButtonCarousel {...props}>{children} ưertwert</SlickButtonCarousel>
  }

  const setting: CarouselProps = {
    draggable: true,
    slidesToShow: 5,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 0,
    nextArrow: (
      <SlickButton currentSlide slideCount>
        <RightOutlined className="prev_icon" />
      </SlickButton>
    ),
    prevArrow: (
      <SlickButton currentSlide slideCount>
        <LeftOutlined className="next_icon" />
      </SlickButton>
    ),
    // responsive: [
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  }

  const data = [
    {
      src: 'https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Hồ Chí Minh',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Đà Nẵng',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=375x&ar=1x1',
      label: 'Hà Nội',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Vũng Tàu',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
  ]

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Các điểm đến thu hút việt nam</H2>
      </Box>
      <Carousel {...setting}>
        {data?.map((item, key) => {
          return (
            <BoxWrapper key={key}>
              <BoxImage>
                <img style={{borderRadius:'16px'}} src={item.src} />
              </BoxImage>
              <BoxTitle>
                <Tiny>{item.label}</Tiny>
                <Span>{item.total}</Span>
              </BoxTitle>
            </BoxWrapper>
          )
        })}
      </Carousel>

      {/* </FlexBox> */}
    </FormBodyWrapper>
  )
}

export default AttractiveLocation
