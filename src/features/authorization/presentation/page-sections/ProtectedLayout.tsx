// import Login from "features/authentication/presentation/pages/login";
import { Fragment, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { AuthenticationAdminProvider } from 'contexts/AuthenticationAdmin'

// component props interface
interface ProtectedLayoutProps {
  children: ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { authState } = useAuth()
  let location = useLocation()
  
  if (authState === 'IS_NOT_AUTHENTICATED') {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  return  <AuthenticationAdminProvider>{children}</AuthenticationAdminProvider>
}

export default ProtectedLayout