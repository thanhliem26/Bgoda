import BackgroundMain from '../page-sections/background-main'
import { MainWrapperProvider } from '../../context'
import { FlexBox } from 'shared/styles'
import AttractiveLocation from '../page-sections/attractive-location'
import DiscountSection from '../page-sections/discount-section'
import ProposePlace from '../page-sections/propose-place'
import ListRoom from '../page-sections/list-room'

function RoomProvince() {

  return (
    <MainWrapperProvider>
      <BackgroundMain  />
     <FlexBox style={{width: '100%', justifyContent: 'center'}}>
     <FlexBox style={{marginTop: '10px', width: '1124px', maxWidth: '100%', flexDirection: 'column', gap: '100px', marginBottom: '50px'}}>
        <ListRoom />
        
        {/* <AttractiveLocation />
        <DiscountSection />
        <ProposePlace /> */}
      </FlexBox>
     </FlexBox>
    </MainWrapperProvider>
  )
}

export default RoomProvince
