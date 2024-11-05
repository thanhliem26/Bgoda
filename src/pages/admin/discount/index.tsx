import DiscountAdmin from 'features/admin/discount/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function DiscountPage() {

  return (
    <HelmetComponent title="Bgoda discount">
      <DiscountAdmin />
    </HelmetComponent>
  )
}

export default DiscountPage
