import { BoxImage, BoxWrapper, FormBodyWrapper, SlickButtonCarousel } from 'features/home/main/shared/style'
import { Box } from 'shared/styles'
import { H2 } from 'shared/styles/Typography'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps } from 'antd'
import useGetDiscount from 'features/home/main/hooks/useGetDiscount'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'


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

  const { discountList } = useGetDiscount();
  const images = useMemo(() => {
    return discountList.map((item) => ({
      id: item?.id,
      image: item?.image,
    }))
  }, [discountList])

  const navigate = useNavigate()

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Chương trình khuyến mãi chỗ ở</H2>
      </Box>
      <Carousel {...setting}>
        {images?.map((item, key) => {
          return (
            <BoxWrapper key={key} onClick={() => {
              navigate(`/discount/${item?.id}`)
            }}>
              <BoxImage style={{height: '185px'}}>
                <img style={{borderRadius:'16px', height: '100%', width: '100%'}} src={item?.image} />
              </BoxImage>
            </BoxWrapper>
          )
        })}
      </Carousel>
    </FormBodyWrapper>
  )
}

export default DiscountSection
