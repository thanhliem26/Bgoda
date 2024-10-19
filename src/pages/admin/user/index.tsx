import AdminUserScreen from 'features/admin/user/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function ApplicationPage() {

  return (
    <HelmetComponent title="Bgoda Admin User">
      <AdminUserScreen />
    </HelmetComponent>
  )
}

export default ApplicationPage
