import { createContext, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import useGetDiscountRoom from '../hooks/useGetDiscoun'
import { Discount } from 'shared/schema/discount'
// props type
type MainWrapperProviderProps = { children: ReactNode }
// --------------------------------------------------------
interface IMainWrapper {
  discountInfo: Discount | null
}

const MainWrapperContext = createContext<IMainWrapper>({
  discountInfo: null
})

export const MainWrapperProvider = ({ children }: MainWrapperProviderProps) => {

  const { id } = useParams()
  const { discountInfo } = useGetDiscountRoom({ id: id as string });

  return (
    <MainWrapperContext.Provider
      value={{
        discountInfo: discountInfo as Discount
      }}
    >
      {children}
    </MainWrapperContext.Provider>
  )
}

export default MainWrapperContext
