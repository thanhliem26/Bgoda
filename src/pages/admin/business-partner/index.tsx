import BusinessPartnerAdmin from 'features/admin/business-partner/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function BusinessPartnerPage() {

  return (
    <HelmetComponent title="Bgoda Business partner">
      <BusinessPartnerAdmin />
    </HelmetComponent>
  )
}

export default BusinessPartnerPage
