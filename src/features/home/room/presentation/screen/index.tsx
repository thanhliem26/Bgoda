import BackgroundMain from '../page-sections/background-main'
import { MainWrapperProvider } from '../../context'
import { FlexBox } from 'shared/styles'
import ListRoom from '../page-sections/list-room'
import RoomInfo from '../page-sections/room-info'

function RoomProvince() {

  return (
    <MainWrapperProvider>
     <FlexBox style={{width: '100%', justifyContent: 'center'}}>
     <FlexBox style={{marginTop: '10px', width: '1124px', maxWidth: '100%', flexDirection: 'column', gap: '100px', marginBottom: '50px'}}>
        <RoomInfo />
        
      </FlexBox>
     </FlexBox>
    </MainWrapperProvider>
  )
}

export default RoomProvince
