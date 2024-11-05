import { createContext, ReactNode, useEffect, useState } from 'react'
import useGetAllRoomType from '../hooks/useGetAllRoomType'
import { IOption } from 'shared/interfaces/common'
import useGetListRoomByProvince, {
  ResponseRoomByProvince,
} from '../hooks/useGetRoomByProvince'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

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
  }
  action: {
    onChangeRangeDate: (fromDate: Date | null, toDate: Date | null) => void
    onChangeSelectRoomType: (id: string) => void
    onChangeRateList: (list: number[]) => void
    fetchNextRoom: () => void
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

  const onChangeRateList = (list: number[]) => {
    setRateList(list)
  }

  //state-application
  const [roomTypeSelected, setRoomTypeSelected] = useState<IOption>()
  const { optionRoomTypes } = useGetAllRoomType()

  //data room
  const { id } = useParams()
  const { optionListRoomProvince, fetchNextRoom } = useGetListRoomByProvince({
    provinceId: id as string,
    roomTypeId: roomTypeSelected?.value as string,
    stars: rateList,
    checkIn: rangeDate?.fromDate as Date,
    checkOut: rangeDate?.toDate as Date,
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
        },
        action: {
          onChangeRangeDate,
          onChangeSelectRoomType,
          onChangeRateList,
          fetchNextRoom,
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
