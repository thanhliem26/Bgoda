import ImageLogin from '../page-sections/ImageLogin'
import FormLogin from '../page-sections/FormLogin'
import { WrapperLoginPage } from '../../shared/style'
import { Box } from 'shared/styles'

function Login() {

  return (
    <WrapperLoginPage>
      <Box className="login__page-wrapper">
        <Box className="container">
          <Box className="singIn__content">         
            <ImageLogin />
            <FormLogin />
          </Box>
        </Box>
      </Box>
    </WrapperLoginPage>
  )
}

export default Login
