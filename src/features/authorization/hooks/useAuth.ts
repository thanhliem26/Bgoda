import AuthContext from 'contexts/Authentication/index'
import { useContext } from 'react'

const useAuth = () => useContext(AuthContext)

export default useAuth