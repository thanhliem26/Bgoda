import { useQuery } from '@tanstack/react-query'
// import useGraphql from 'features/hiring-team/domain/graphql/graphql'
import { useMemo } from 'react'
// import GraphQLClientService from 'services/graphql-service'
// import HiringTeam from 'shared/schema/database/hiring_team'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service'

const useGetOptions = () => {
  const { getAllPermission, queryKey } = useService()

  const { data, ...otherValue } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      RESTClientService.fetchREST(getAllPermission()),
  })

  const permissions: string[] = useMemo(() => {
    if (data && isRight(data)) {
      const response = unwrapEither(data) as string[]
      return response
    }
    return []
  }, [data])

  const options = useMemo(() => {
    return permissions.map((item) => ( {label: item, value: item}))
  }, [permissions])
// console.log("options", options)
  return {
    ...otherValue,
    options,
  }
}

export default useGetOptions
