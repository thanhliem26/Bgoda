import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { Room } from 'shared/schema/room'

interface Props {
    id: string
}
const useGetRoomByDiscount = ({ id }: Props) => {
  const { getRoomByDiscount } = useService()

  const { data } = useQuery({
    queryKey: ['get-room-by-discount'],
    queryFn: async () =>
      RESTClientService.fetchREST(getRoomByDiscount(), {couponId: id}),
  })

  const roomByDiscount: Room[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    roomByDiscount: roomByDiscount,
  }
}

export default useGetRoomByDiscount
