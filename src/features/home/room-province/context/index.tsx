import { createContext, ReactNode, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import useGetAllRoomType from '../hooks/useGetAllRoomType'
import { IOption } from 'shared/interfaces/common'
import useGetListSuggest, { ListSuggestBPANDPROVINCE } from '../hooks/useGetSuggestProvince'
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
    state: {
        search: string
        rangeDate: RangeDate
        roomTypeSelected: IOption | undefined
        optionListSuggest: ListSuggestBPANDPROVINCE[]
    },
    action: {
        onChangeSearch: (search: string) => void
        onChangeRangeDate: (fromDate: Date | null, toDate: Date | null) => void
        onChangeSelectRoomType: (id: string) => void
    },
    state_application: {
        optionRoomTypes: IOption[]
    }
}

const MainWrapperContext = createContext<IMainWrapper>({
    state: {
        search: '',
        rangeDate: {
            fromDate: dayjs().toDate(),
            toDate: dayjs().add(1, 'week').toDate(),
        },
        roomTypeSelected: undefined,
        optionListSuggest: []
    },
    action: {
        onChangeSearch: () => { },
        onChangeRangeDate: () => { },
        onChangeSelectRoomType: () => {}
    },
    state_application: {
        optionRoomTypes: []
    }
})

export const MainWrapperProvider = ({ children }: MainWrapperProviderProps) => {
    //state
    const [search, setSearch] = useState<string>('');
    const [rangeDate, setRangeDate] = useState<RangeDate>({
        fromDate: dayjs().toDate(),
        toDate: dayjs().add(1, 'week').toDate(),
    })

    //state-application
    const [roomTypeSelected, setRoomTypeSelected] = useState<IOption>();
    const { optionRoomTypes } = useGetAllRoomType();

    const { optionListSuggest } = useGetListSuggest({searchInput: search});

    //actions
    const onChangeSearch = (search: string) => {
        setSearch(search)
    }

    const onChangeRangeDate = (fromDate: Date | null, toDate: Date | null) => {
        setRangeDate(() => ({
            fromDate: fromDate,
            toDate: toDate
        }))
    }

    const onChangeSelectRoomType = (id: string) => {
        const roomType = optionRoomTypes.find((item) => item?.value == id);
        setRoomTypeSelected(roomType);
    }

    useEffect(() => {
        if(optionRoomTypes?.[0]) {
            setRoomTypeSelected(optionRoomTypes?.[0])
        }
    }, [optionRoomTypes])


    return (
        <MainWrapperContext.Provider
            value={{
                state: {
                    rangeDate,
                    optionListSuggest,
                    search,
                    roomTypeSelected,
                },
                action: {
                    onChangeRangeDate,
                    onChangeSearch,
                    onChangeSelectRoomType
                },
                state_application: {
                    optionRoomTypes
                }
            }}
        >
            {children}
        </MainWrapperContext.Provider>
    )
}

export default MainWrapperContext
