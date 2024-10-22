import LoginScreen from 'features/home/login/presentation/screen/index';
import HelmetComponent from 'shared/components/helmet'

function LoginPage() {

  return (
    <HelmetComponent title="Bgoda login">
      <LoginScreen />
    </HelmetComponent>
  )
}

export default LoginPage
