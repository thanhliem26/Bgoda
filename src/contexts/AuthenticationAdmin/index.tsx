import { createContext, ReactNode } from 'react'
import useGetMe from './hooks/useGetMe'
// --------------------------------------------------------

// props type
type AuthProviderProps = { children: ReactNode }
// --------------------------------------------------------

interface IAuthAdminContext {
    name: string
    permission: string[]
    image: string
}

const AuthAdminContext = createContext<IAuthAdminContext>({
    name: '',
    permission: [],
    image: ''
})

export const AuthenticationAdminProvider = ({ children }: AuthProviderProps) => {
    const { information } = useGetMe()

    return (
        <AuthAdminContext.Provider
            value={{
                name: information?.name,
                permission: information?.permission,
                image: information?.image
            }}
        >
            {children}
        </AuthAdminContext.Provider>
    )
}

export default AuthAdminContext
