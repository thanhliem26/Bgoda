import { createContext, ReactNode, useEffect, useState } from 'react'
import useGetAllRoomType from '../hooks/useGetAllRoomType'
import { IOption } from 'shared/interfaces/common'
import useGetListRoomByProvince, {
  ResponseRoomByProvince,
} from '../hooks/useGetRoomByProvince'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import useGetAllServiceRoom from 'features/home/room-search/hooks/useGetAllServiceRoom'

// props type
type MainWrapperProviderProps = { children: ReactNode }
// --------------------------------------------------------

type RangeDate = {
  fromDate: Date | null
  toDate: Date | null
}

interface IMainWrapper {
  state: {
    rangeDate: RangeDate
    roomTypeSelected: IOption | undefined
    optionListRoomProvince: ResponseRoomByProvince
    hasMore: boolean
    rateList: number[]
    serviceList: number[]
    optionRoomService: IOption[]
    sliderPrice: number[]
  }
  action: {
    onChangeRangeDate: (fromDate: Date | null, toDate: Date | null) => void
    onChangeSelectRoomType: (id: string) => void
    onChangeRateList: (list: number[]) => void
    fetchNextRoom: () => void
    onChangeServiceList: (list: number[]) => void
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
    serviceList: [],
    optionRoomService: [],
    hasMore: false,
    rateList: [],
    roomTypeSelected: undefined,
    optionListRoomProvince: {
      provinceData: {
        id: '0',
        image: '',
        name: '',
        roomNumber: 0,
      },
      rooms: [],
      totalRecord: 0,
    },
  },
  action: {
    onChangeRangeDate: () => {},
    onChangeSelectRoomType: () => {},
    onChangeRateList: () => {},
    fetchNextRoom: () => {},
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
  const [rangeDate, setRangeDate] = useState<RangeDate>({
    fromDate: dayjs().toDate(),
    toDate: dayjs().add(1, 'month').toDate(),
  })
  const [rateList, setRateList] = useState<number[]>([])
  const [serviceList, setServiceList] = useState<number[]>([])
  const [sliderPrice, setSliderPrice] = useState<number[]>([0, 0])

  const onChangeServiceList = (list: number[]) => {
    setServiceList(list)
  }

  const onChangePrice = (list: number[]) => {
    setSliderPrice(list)
  }

  const { optionRoomService } = useGetAllServiceRoom()

  const onChangeRateList = (list: number[]) => {
    setRateList(list)
  }

  //state-application
  const [roomTypeSelected, setRoomTypeSelected] = useState<IOption>()
  const { optionRoomTypes } = useGetAllRoomType()

  //data room
  const { id } = useParams()
  const { optionListRoomProvince, fetchNextRoom, refetchPage } = useGetListRoomByProvince({
    provinceId: id as string,
    roomTypeId: roomTypeSelected?.value as string,
    stars: rateList,
    checkIn: rangeDate?.fromDate as Date,
    checkOut: rangeDate?.toDate as Date,
    services: serviceList,
    minPrice: sliderPrice?.[0],
    maxPrice: sliderPrice?.[1],
  })
  //actions
  const hasMore =
    optionListRoomProvince?.rooms?.length < optionListRoomProvince?.totalRecord

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

  return (
    <MainWrapperContext.Provider
      value={{
        state: {
          rangeDate,
          roomTypeSelected,
          optionListRoomProvince,
          rateList,
          hasMore,
          optionRoomService:  optionRoomService as IOption[],
          serviceList,
          sliderPrice
        },
        action: {
          onChangeRangeDate,
          onChangeSelectRoomType,
          onChangeRateList,
          fetchNextRoom,
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
