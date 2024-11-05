import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import RESTClientService from 'services/axios-service'
import { BaseRecord } from 'shared/interfaces/common'
import useService from '../domain/services'

const useGetRoomIds = () => {
  const { getAllRoom } = useService()

  const { data } = useQuery({
    queryKey: ['select_room_discount_admin'],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllRoom()),
  })

  const allRoom: BaseRecord[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data)
      return metaData
    }
    return []
  }, [data])

  const idsRoom: number[] = useMemo(() => {
    return allRoom.map((item) => item?.id)
  }, [allRoom])

  return {
    idsRoom,
  }
}

export default useGetRoomIds
