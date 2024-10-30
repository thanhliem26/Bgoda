import BackgroundMain from '../page-sections/background-main'
import { MainWrapperProvider } from '../../context'
import { Box, FlexBox } from 'shared/styles'
import AttractiveLocation from '../page-sections/attractive-location'
import DiscountSection from '../page-sections/discount-section'
import ProposePlace from '../page-sections/propose-place'

function Home() {

  return (
    <MainWrapperProvider>
      <BackgroundMain  />
     <FlexBox style={{width: '100%', justifyContent: 'center'}}>
     <FlexBox style={{marginTop: '100px', width: '1124px', maxWidth: '100%', flexDirection: 'column', gap: '100px', marginBottom: '50px'}}>
        <AttractiveLocation />
        <DiscountSection />
        <ProposePlace />
      </FlexBox>
     </FlexBox>
    </MainWrapperProvider>
  )
}

export default Home
