import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useRatingTable = (props: IUseCustomCommonTable) => {
  const { getAllRating, queryKey } = useService()
  const { search, filters, variables = {} } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllRating,
    queryKey,
    filters,
    search,
    variables
  })

  return {
    useTableReturn,
  }
}

export default useRatingTable
