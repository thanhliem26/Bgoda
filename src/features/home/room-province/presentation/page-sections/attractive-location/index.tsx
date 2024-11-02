import { BoxImage, BoxTitle, BoxWrapper, FormBodyWrapper, SlickButtonCarousel } from 'features/home/main/shared/style'
import { Box } from 'shared/styles'
import { H2, Span, Tiny } from 'shared/styles/Typography'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps } from 'antd'
import useGetListProvince from 'features/home/main/hooks/useGetProvince'
import { useMemo } from 'react'


const AttractiveLocation = () => {
  const { optionProvinceMain } = useGetListProvince();
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

  const dataProvince = useMemo(() => {
    return optionProvinceMain.map((item) => {
      return {
        src: item?.image,
        label: item?.name,
        total: `${item?.roomNumber ? item?.roomNumber : 0} chỗ ở`,
        id: item?.id
      }
    })
  }, [optionProvinceMain])

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Các điểm đến thu hút việt nam</H2>
      </Box>
      <Carousel {...setting}>
        {dataProvince?.map((item, key) => {
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
