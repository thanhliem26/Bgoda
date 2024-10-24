import RoomTypeAdmin from 'features/admin/room-type/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function RoomTypePage() {

  return (
    <HelmetComponent title="Bgoda Room Type">
      <RoomTypeAdmin />
    </HelmetComponent>
  )
}

export default RoomTypePage
