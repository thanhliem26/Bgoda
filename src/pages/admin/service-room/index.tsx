import ServiceRoomAdmin from 'features/admin/service-room/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function ServiceRoomPage() {

  return (
    <HelmetComponent title="Bgoda Room Type">
      <ServiceRoomAdmin />
    </HelmetComponent>
  )
}

export default ServiceRoomPage
