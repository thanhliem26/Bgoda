import RoomAdmin from 'features/admin/room/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function RoomPage() {

  return (
    <HelmetComponent title="Bgoda Room">
      <RoomAdmin />
    </HelmetComponent>
  )
}

export default RoomPage
