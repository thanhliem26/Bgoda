import {
  FormBodyWrapper,
} from 'features/home/main/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { H2 } from 'shared/styles/Typography'
import AppTabComponent, { ITabType } from 'shared/components/AppTabs'
import RoomComponent from './components/RoomComponent'
import useGetPopularVisit from 'features/home/main/hooks/useGetPopularVisit'
import { useMemo } from 'react'
import { convertCurrency } from 'shared/utils/convert-string'

const ProposePlace = () => {

  const { optionPopularVisit } = useGetPopularVisit();

  const popularVisitItem: ITabType[] = useMemo(() => {
    return optionPopularVisit.map((popularVisit, index) => {
      const dataRoom = popularVisit.rooms.map((item) => ({
        image: item?.thumbnail,
        name: item?.name,
        price: convertCurrency(item?.price),
        address: item?.address,
      
    }));

      return  {
        key: index.toString(),
        label: popularVisit?.name,
        children: <RoomComponent data={dataRoom} />,
      }
    })
  }, [optionPopularVisit])

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Những chỗ nghĩ được đề xuất cho quí khách</H2>
      </Box>
      <FlexBox>
        <AppTabComponent items={popularVisitItem} />
      </FlexBox>
    </FormBodyWrapper>
  )
}

export default ProposePlace
