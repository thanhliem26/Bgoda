import SystemLogin from 'features/admin/system-login/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function SystemLoginPage() {

  return (
    <HelmetComponent title="Bgoda System login">
      <SystemLogin />
    </HelmetComponent>
  )
}

export default SystemLoginPage
