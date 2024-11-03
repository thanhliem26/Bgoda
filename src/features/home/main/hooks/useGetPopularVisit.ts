import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

interface IOptionPopularVisit {
    name: string
    rooms: {
        id: number
        address: string
        avaiable: number
        defaultDiscount: string
        description: string
        name: string
        price: number
        thumbnail: string
    }[]
}
const useGetPopularVisit = () => {
  const { getPopularVisit } = useService()

  const { data } = useQuery({
    queryKey: [MODLUE_QUERY_KEY.APPLICATION_POPULAR_VISIT],
    queryFn: async () =>
      RESTClientService.fetchREST(getPopularVisit()),
  })

  const popularVisit: IOptionPopularVisit[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    optionPopularVisit: popularVisit,
  }
}

export default useGetPopularVisit
