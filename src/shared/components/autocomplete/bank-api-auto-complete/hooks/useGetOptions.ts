import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service'

interface IBank {
  id: number
  logo: string
  name: string
}
const useGetOptions = () => {
  const { getAllBank, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllBank()),
  })

  const banks: IBank[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return banks.map((item) => ( {label: item?.name, value: item?.id}))
  }, [banks])

  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
