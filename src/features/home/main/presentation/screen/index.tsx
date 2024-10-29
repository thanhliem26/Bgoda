import BackgroundMain from '../page-sections/background-main'
import { MainWrapperProvider } from '../../context'
import BodyMain from '../page-sections/body-main'

function Home() {

  return (
    <MainWrapperProvider>
      <BackgroundMain  />
      <BodyMain />
    </MainWrapperProvider>
  )
}

export default Home
