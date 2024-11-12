import { createContext, ReactNode } from 'react'
import { User } from 'shared/schema/user'
import useDetailBusinessPartner from 'contexts/Authentication/hooks/useGetInfoUser'
import useAuth from 'features/authorization/hooks/useAuth'


// props type
type AuthProviderProps = { children: ReactNode }
// --------------------------------------------------------

interface IAuthContext {
  userInfo: User | null
}

const AuthUserContext = createContext<IAuthContext>({
  userInfo: null
})

export const AuthenticateUserProvider = ({ children }: AuthProviderProps) => {
  const { isAuthTourist } = useAuth()
  const { userInfo } = useDetailBusinessPartner({ authenticate: isAuthTourist });
  
  return (
    <AuthUserContext.Provider
      value={{
        userInfo: userInfo
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserContext
