import { BoxImage, BoxTitle, BoxWrapper, FormBodyWrapper, SlickButtonCarousel } from 'features/home/main/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { H2, Span, Tiny } from 'shared/styles/Typography'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps } from 'antd'


const DiscountSection = () => {
  //@ts-ignore
  const SlickButton = ({ currentSlide, slideCount, children, ...props }) => {
    return <SlickButtonCarousel {...props} >{children}</SlickButtonCarousel>
  }

  const setting: CarouselProps = {
    draggable: true,
    dots: true,
    arrows: true,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
      src: 'https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_superwednesday_newdesign/home_banner_web/vi-vn.png',
      label: 'Hồ Chí Minh',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/wcPD20230127/home_banner_web4/vi-vn.png',
      label: 'Đà Nẵng',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_muongthanh_vn/home_banner_web/en-us.png',
      label: 'Hà Nội',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/pulse_globalcampaign_prestigesavings_ka/home_banner_web/vi-vn.png',
      label: 'Vũng Tàu',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/pulse_globalcampaign_midnightmadness/home_banner_web2/vi-vn.png',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_celebrateher_vn/home_banner_web/vi-vn.png',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
    {
      src: 'https://cdn6.agoda.net/images/WebCampaign/wcM4S20230403Elite/home_banner_web2/vi-vn.png',
      label: 'Đà Lạt',
      total: '15.416 chỗ ở',
    },
  ]

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Chương trình khuyến mãi chỗ ở</H2>
      </Box>
      <Carousel {...setting}>
        {data?.map((item, key) => {
          return (
            <BoxWrapper key={key}>
              <BoxImage style={{height: '185px'}}>
                <img style={{borderRadius:'16px', height: '100%', width: '100%'}} src={item.src} />
              </BoxImage>
            </BoxWrapper>
          )
        })}
      </Carousel>
    </FormBodyWrapper>
  )
}

export default DiscountSection
