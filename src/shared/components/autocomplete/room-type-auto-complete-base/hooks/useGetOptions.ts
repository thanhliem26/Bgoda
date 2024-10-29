import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service'
import { RoleTemplate } from 'shared/schema/role-template'

const useGetOptions = () => {
  const { getAllRoomType, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllRoomType()),
  })

  const roomTypes: RoleTemplate[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return roomTypes.map((item) => ( {label: item?.name, value: item?.id}))
  }, [roomTypes])

  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
