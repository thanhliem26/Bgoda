import { BoxImage, BoxTitle, BoxWrapper, FormBodyWrapper, SlickButtonCarousel } from 'features/home/main/shared/style'
import { Box } from 'shared/styles'
import { H2, Span, Tiny } from 'shared/styles/Typography'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps } from 'antd'


const AttractiveLocation = () => {
  //@ts-ignore
  const SlickButton = ({ currentSlide, slideCount, children, ...props }) => {
    return <SlickButtonCarousel {...props} >{children}</SlickButtonCarousel>
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
        <RightOutlined />
      </SlickButton>
    ),
    prevArrow: (
      <SlickButton currentSlide slideCount>
        <LeftOutlined />
      </SlickButton>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
    </FormBodyWrapper>
  )
}

export default AttractiveLocation
