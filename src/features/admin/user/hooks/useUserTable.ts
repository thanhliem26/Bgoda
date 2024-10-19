import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useTeamTable = (props: IUseCustomCommonTable) => {
  const { getAllUser, queryKey } = useService()
  const { search, filters } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllUser,
    queryKey,
    filters,
    search,
    variables: {name: ''}
  })

  return {
    useTableReturn,
  }
}

export default useTeamTable
