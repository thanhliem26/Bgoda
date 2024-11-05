import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'

interface IBusinessPartner {
    id: string
    name: string
    logo: string
    companyName: number
}
const useGetListBusinessPartner = () => {
  const { getAllBusinessPartner, queryKey } = useService()

  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllBusinessPartner()),
  })

  const businessPartnerMain: IBusinessPartner[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  return {
    optionBusinessPartner: businessPartnerMain,
  }
}

export default useGetListBusinessPartner
