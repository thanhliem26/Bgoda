import BackgroundMain from '../page-sections/background-main'
import { MainWrapperProvider } from '../../context'
import { FlexBox } from 'shared/styles'
import ListRoom from '../page-sections/list-room'

function DiscountRoom() {

  return (
    <MainWrapperProvider>
      <BackgroundMain />
      <FlexBox style={{ width: '100%', justifyContent: 'center' }}>
        <FlexBox style={{ marginTop: '10px', width: '1124px', maxWidth: '100%', flexDirection: 'column', gap: '100px', marginBottom: '50px' }}>
          <ListRoom />
        </FlexBox>
      </FlexBox>
    </MainWrapperProvider>
  )
}

export default DiscountRoom
