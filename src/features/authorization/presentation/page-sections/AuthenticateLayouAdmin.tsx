import { Fragment, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { TYPE_ACCOUNT_LOGIN } from 'contexts/Authentication'

// component props interface
interface AuthenticateLayoutProps {
  children: ReactNode
}

const AuthenticateLayoutAdmin = ({ children }: AuthenticateLayoutProps) => {
  const { authState, type } = useAuth()
 
  let location = useLocation()
  if (authState === 'IS_AUTHENTICATED' && (type === TYPE_ACCOUNT_LOGIN.BUSINESS_PARTNER || type === TYPE_ACCOUNT_LOGIN.SYSTEM_EMPLOYEE)) {
    return <Navigate to="/admin/room" state={{ from: location }} replace />
  }
  
  return <Fragment>{children}</Fragment>
}

export default AuthenticateLayoutAdmin