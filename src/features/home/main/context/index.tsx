import { createContext, ReactNode, useState } from 'react'
import dayjs from 'dayjs'
// import restApi from 'configs/api/restApi'
// --------------------------------------------------------

// props type
type MainWrapperProviderProps = { children: ReactNode }
// --------------------------------------------------------

type RangeDate = {
    fromDate: Date | null
    toDate: Date | null
}

interface IMainWrapper {
    search: string
    rangeDate: RangeDate
    roomTypeId: string
    onChangeSearch: (search: string) => void
    onChangeRangeDate: (fromDate: Date | null, toDate: null) => void
    onChangeRoomType: (roomTypeId: string) => void
}

const MainWrapperContext = createContext<IMainWrapper>({
    search: '',
    rangeDate: {
        fromDate: dayjs().toDate(),
        toDate: dayjs().add(1, 'week').toDate(),
    },
    roomTypeId: '',
    onChangeSearch: () => { },
    onChangeRangeDate: () => { },
    onChangeRoomType: () => { }
})

export const MainWrapperProvider = ({ children }: MainWrapperProviderProps) => {
    const [search, setSearch] = useState<string>('');
    const [rangeDate, setRangeDate] = useState<RangeDate>({
        fromDate: dayjs().toDate(),
        toDate: dayjs().add(1, 'week').toDate(),
    })
    const [roomTypeId, setRoomTypeId] = useState<string>('')

    const onChangeSearch = (search: string) => {
        setSearch(search)
    }

    const onChangeRoomType = (search: string) => {
        setRoomTypeId(search)
    }

    const onChangeRangeDate = (fromDate: Date | null, toDate: null) => {
        setRangeDate(() => ({
            fromDate: fromDate,
            toDate: toDate
        }))
    }


    return (
        <MainWrapperContext.Provider
            value={{
                rangeDate,
                roomTypeId,
                search,
                onChangeRangeDate,
                onChangeRoomType,
                onChangeSearch
            }}
        >
            {children}
        </MainWrapperContext.Provider>
    )
}

export default MainWrapperContext
