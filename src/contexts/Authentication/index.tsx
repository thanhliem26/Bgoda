import { createContext, ReactNode, useEffect, useState } from 'react'
import LoadingScreen from 'shared/components/loading-screen'
import Token from 'shared/class/token'
import handleAuthLocalStorage from 'services/auth-local-storage-service'
import useDetailBusinessPartner from './hooks/useGetInfoUser'
// import restApi from 'configs/api/restApi'
// --------------------------------------------------------

// props type
type AuthProviderProps = { children: ReactNode }
// --------------------------------------------------------

interface IAuthContext {
  authState: AuthState
  logout: () => void
  type: string
  isAuthTourist: boolean
}

const AuthContext = createContext<IAuthContext>({
  authState: 'INIT',
  logout: () => {},
  type: '',
  isAuthTourist: false
})

type AuthState = 'INIT' | 'IS_AUTHENTICATED' | 'IS_NOT_AUTHENTICATED'

export const TYPE_ACCOUNT_LOGIN = {
  TOURIST: 'Tourist',
  SYSTEM_EMPLOYEE: 'SystemEmployee',
  BUSINESS_PARTNER: 'BusinessPartner',
}

export const AuthenticationProvider = ({ children }: AuthProviderProps) => {
  const { removeToken, getToken } = handleAuthLocalStorage()
  const [authState, setAuthState] = useState<AuthState>('INIT')
  const [type, setType] = useState<string>('');

  const isAuthTourist = authState === 'IS_AUTHENTICATED' && type === TYPE_ACCOUNT_LOGIN.TOURIST;

  const logout = () => {
    removeToken()
    window.location.href = '/auth/login'
  }

  useEffect(() => {
    ;(async () => {
      try {
        const token = getToken()
        // console.log("🚀 ~ token:", token)
        if (
          token &&
          token?.accessToken &&
          Token.isValidToken(token.accessToken)
        ) {
          setAuthState('IS_AUTHENTICATED')
          setType(token?.type)
        } else {
          setAuthState('IS_NOT_AUTHENTICATED')
        }
      } catch (err) {
        setAuthState('IS_NOT_AUTHENTICATED')
      }
    })()
  }, [])
  
  if (authState === 'INIT') return <LoadingScreen />
  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
        type,
        isAuthTourist,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
