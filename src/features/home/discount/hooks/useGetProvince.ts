import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'

interface IProvinceMain {
    id: string
    name: string
    image: string
    roomNumber: number
}
const useGetListProvince = () => {
  const { getListProvince, queryKey } = useService()

  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getListProvince()),
  })

  const provinceMain: IProvinceMain[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    optionProvinceMain: provinceMain,
  }
}

export default useGetListProvince
