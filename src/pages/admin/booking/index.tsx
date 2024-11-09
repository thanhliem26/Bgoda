import BookingAdmin from 'features/admin/booking/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function BookingPage() {

  return (
    <HelmetComponent title="Bgoda Business partner">
      <BookingAdmin />
    </HelmetComponent>
  )
}

export default BookingPage
