import AdminUserScreen from 'features/home/index';
import HelmetComponent from 'shared/components/helmet'

function HomePage() {

  return (
    <HelmetComponent title="Bgoda">
      <AdminUserScreen />
    </HelmetComponent>
  )
}

export default HomePage
