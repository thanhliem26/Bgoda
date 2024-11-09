import { createContext, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { Discount } from 'shared/schema/discount'
// props type
type MainWrapperProviderProps = { children: ReactNode }
// --------------------------------------------------------
interface IMainWrapper {
  // discountInfo: Discount | null
}

const MainWrapperContext = createContext<IMainWrapper>({
  // discountInfo: null
})

export const MainWrapperProvider = ({ children }: MainWrapperProviderProps) => {


  return (
    <MainWrapperContext.Provider
      value={{

      }}
    >
      {children}
    </MainWrapperContext.Provider>
  )
}

export default MainWrapperContext
