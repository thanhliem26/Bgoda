import HomeScreen from 'features/home/main/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function HomePage() {

  return (
    <HelmetComponent title="Bgoda">
      <HomeScreen />
    </HelmetComponent>
  )
}

export default HomePage
