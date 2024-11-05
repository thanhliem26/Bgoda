// import Login from "features/authentication/presentation/pages/login";
import { Fragment, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { TYPE_ACCOUNT_LOGIN } from 'contexts/Authentication'

// component props interface
interface AuthenticateLayoutProps {
  children: ReactNode
}

const AuthenticateLayout = ({ children }: AuthenticateLayoutProps) => {
  const { authState, type } = useAuth()
  let location = useLocation()
  if (authState === 'IS_AUTHENTICATED' && type === TYPE_ACCOUNT_LOGIN.TOURIST) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  
  return <Fragment>{children}</Fragment>
}

export default AuthenticateLayout