import { createContext, ReactNode, useEffect, useState } from 'react'
import useGetAllRoomType from '../hooks/useGetAllRoomType'
import { IOption } from 'shared/interfaces/common'
import useGetListRoomByProvince, {
  ResponseRoomByProvince,
} from '../hooks/useGetRoomByProvince'
import { useLocation, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import useGetAllServiceRoom from '../hooks/useGetAllServiceRoom'

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
    optionListRoom: ResponseRoomByProvince
    optionRoomService: IOption[]
    hasMore: boolean
    rateList: number[]
    serviceList: number[]
    sliderPrice: number[]
  }
  action: {
    onChangeRangeDate: (fromDate: Date | null, toDate: Date | null) => void
    onChangeSelectRoomType: (id: string) => void
    onChangeRateList: (list: number[]) => void
    fetchNextRoom: () => void
    onChangeSearch: (search: string) => void
    onChangeServiceList: (search: number[]) => void
    refetchPage: () => void
    onChangePrice: (list: number[]) => void
  }
  state_application: {
    optionRoomTypes: IOption[]
  }
}

const MainWrapperContext = createContext<IMainWrapper>({
  state: {
    rangeDate: {
      fromDate: null,
      toDate: null,
    },
    sliderPrice: [],
    search: '',
    serviceList: [],
    optionRoomService: [],
    hasMore: false,
    rateList: [],
    roomTypeSelected: undefined,
    optionListRoom: {
      rooms: [],
      totalRecord: 0,
    },
  },
  action: {
    onChangeRangeDate: () => {},
    onChangeSelectRoomType: () => {},
    onChangeRateList: () => {},
    fetchNextRoom: () => {},
    onChangeSearch: () => {},
    onChangeServiceList: () => {},
    refetchPage: () => {},
    onChangePrice: () => {}
  },
  state_application: {
    optionRoomTypes: [],
  },
})

export const MainWrapperProvider = ({ children }: MainWrapperProviderProps) => {
  //state
  const location = useLocation()

  const [rangeDate, setRangeDate] = useState<RangeDate>({
    fromDate: dayjs().toDate(),
    toDate: dayjs().add(1, 'month').toDate(),
  })
  const [rateList, setRateList] = useState<number[]>([])
  const [serviceList, setServiceList] = useState<number[]>([])
  const [search, setSearch] = useState<string>('')
  const [sliderPrice, setSliderPrice] = useState<number[]>([0, 0])

  const onChangeRateList = (list: number[]) => {
    setRateList(list)
  }
  
  const onChangePrice = (list: number[]) => {
    setSliderPrice(list)
  }

  const onChangeServiceList = (list: number[]) => {
    setServiceList(list)
  }

  //state-application
  const [roomTypeSelected, setRoomTypeSelected] = useState<IOption>()
  const { optionRoomTypes } = useGetAllRoomType()
  const { optionRoomService } = useGetAllServiceRoom()
  
  //actions
  const onChangeSearch = (search: string) => {
    setSearch(search)
  }

  //data room
  const { id } = useParams()
  const { optionListRoom, fetchNextRoom, refetchPage } =
    useGetListRoomByProvince({
      provinceId: id as string,
      roomTypeId: roomTypeSelected?.value as string,
      stars: rateList,
      checkIn: rangeDate?.fromDate as Date,
      checkOut: rangeDate?.toDate as Date,
      searchInput: search,
      services: serviceList,
      minPrice: sliderPrice?.[0],
      maxPrice: sliderPrice?.[1],
    })
  //actions
  const hasMore = optionListRoom?.rooms?.length < optionListRoom?.totalRecord

  const onChangeRangeDate = (fromDate: Date | null, toDate: Date | null) => {
    setRangeDate(() => ({
      fromDate: fromDate,
      toDate: toDate,
    }))
  }

  const onChangeSelectRoomType = (id: string) => {
    const roomType = optionRoomTypes.find((item) => item?.value == id)
    setRoomTypeSelected(roomType)
  }

  useEffect(() => {
    if (optionRoomTypes?.[0]) {
      setRoomTypeSelected(optionRoomTypes?.[0])
    }
  }, [optionRoomTypes])

  useEffect(() => {
    const stateLocation = location?.state
    setRoomTypeSelected(stateLocation?.roomTypeSelected)
    onChangeRangeDate(
      stateLocation?.rangeDate?.fromDate,
      stateLocation?.rangeDate?.toDate
    )
    onChangeSearch(stateLocation?.search)
  }, [location?.state])

  return (
    <MainWrapperContext.Provider
      value={{
        state: {
          rangeDate,
          roomTypeSelected,
          optionListRoom,
          rateList,
          hasMore,
          search,
          optionRoomService: optionRoomService as IOption[],
          serviceList,
          sliderPrice
        },
        action: {
          onChangeRangeDate,
          onChangeSelectRoomType,
          onChangeRateList,
          fetchNextRoom,
          onChangeSearch,
          onChangeServiceList,
          refetchPage,
          onChangePrice
        },
        state_application: {
          optionRoomTypes,
        },
      }}
    >
      {children}
    </MainWrapperContext.Provider>
  )
}

export default MainWrapperContext
