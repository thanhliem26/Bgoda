import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { ServiceRoom } from 'shared/schema/service-room'

const useGetAllServiceRoom = () => {
  const { getListServiceRoom } = useService()

  const { data } = useQuery({
    queryKey: ['slect_room_service'],
    queryFn: async () =>
      RESTClientService.fetchREST(getListServiceRoom()),
  })

  const roomService: ServiceRoom[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return roomService.map((item) => ( {label: item?.name, value: item?.id}))
}, [roomService])

  return {
    optionRoomService: options,
  }
}

export default useGetAllServiceRoom
