import { FlexBox } from 'shared/styles'
import RoomInfo from '../page-sections/room-info'
import { Fragment } from 'react/jsx-runtime'

function RoomProvince() {

  return (
    <Fragment>
     <FlexBox style={{width: '100%', justifyContent: 'center'}}>
     <FlexBox style={{marginTop: '10px', width: '1124px', maxWidth: '100%', flexDirection: 'column', gap: '100px', marginBottom: '50px'}}>
        <RoomInfo />
      </FlexBox>
     </FlexBox>
    </Fragment>
  )
}

export default RoomProvince
