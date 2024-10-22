// import Login from "features/authentication/presentation/pages/login";
import { Fragment, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

// component props interface
interface AuthenticateLayoutProps {
  children: ReactNode
}

const AuthenticateLayout = ({ children }: AuthenticateLayoutProps) => {
  const { authState } = useAuth()
  let location = useLocation()
  if (authState === 'IS_AUTHENTICATED') {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }
  
  return <Fragment>{children}</Fragment>
}

export default AuthenticateLayout