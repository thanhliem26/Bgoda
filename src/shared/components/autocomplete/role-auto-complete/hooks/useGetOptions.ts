import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service'
import { RoleTemplate } from 'shared/schema/role-template'

const useGetOptions = () => {
  const { getAllRole, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllRole()),
  })

  const roles: RoleTemplate[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);
      return metaData
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return roles.map((item) => ( {label: item?.name, value: item?.id}))
  }, [roles])

  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
