import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Room } from 'shared/schema/room'
import { isEmpty } from 'lodash'

interface IUseGetAllSuggest {
  provinceId: string
  roomTypeId: string
  stars: number[]
  checkIn: Date
  checkOut: Date
  services: number[]
  minPrice: number
  maxPrice: number
  districtIds: string[]
}

export type ResponseRoomByProvince = {
  provinceData: {
    id: string
    image: string
    roomNumber: number
    name: string
  }
  rooms: Room[]
  totalRecord: number
}

const INIT_PER_PAGE = 3
const useGetListRoomByProvince = ({
  provinceId,
  roomTypeId,
  stars,
  checkIn,
  checkOut,
  services,
  minPrice,
  maxPrice,
  districtIds,
}: IUseGetAllSuggest) => {
  const { getListRoomByProvince, queryKey } = useService()

  const fetchRoomProvince = async ({ pageParam }: { pageParam: number }) => {
    return RESTClientService.fetchREST(getListRoomByProvince(), {
      provinceId: provinceId,
      roomTypeId: roomTypeId,
      stars: !isEmpty(stars) ? stars : null,
      checkOut: checkOut,
      checkIn: checkIn,
      page: pageParam,
      perPage: INIT_PER_PAGE,
      services: !isEmpty(services) ? services : null,
      minPrice,
      maxPrice,
      districtIds: !isEmpty(districtIds) ? districtIds : null,
    })
  }

  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: [
      queryKey,
      provinceId,
      minPrice,
      maxPrice,
    ],
    queryFn: fetchRoomProvince,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1
    },
  })

  const roomByProvince: ResponseRoomByProvince = useMemo(() => {
    let provinceData = {
      id: '',
      image: '',
      name: '',
      roomNumber: 0,
    }
    let totalRecord = 0

    const pages = data?.pages
    if (pages) {
      const response = pages?.flatMap((roomProvinceItem) => {
        if (roomProvinceItem && isRight(roomProvinceItem)) {
          const { metaData, options } = unwrapEither(roomProvinceItem)
          if (!totalRecord) {
            totalRecord = options?.totalRecords
          }
          if (!provinceData.id) {
            provinceData = {
              id: metaData?.id,
              image: metaData?.image,
              name: metaData?.name,
              roomNumber: metaData?.roomNumber,
            }
          }

          return metaData?.rooms
        }

        return []
      })

      return {
        provinceData: provinceData,
        rooms: response,
        totalRecord: totalRecord,
      }
    }

    return {
      totalRecord: totalRecord,
      provinceData: provinceData,
      rooms: [],
    }
  }, [data])

  return {
    optionListRoomProvince: roomByProvince,
    fetchNextRoom: fetchNextPage,
    refetchPage: refetch,
  }
}

export default useGetListRoomByProvince
