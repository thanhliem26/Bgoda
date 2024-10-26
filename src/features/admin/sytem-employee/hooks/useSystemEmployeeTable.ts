import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useSystemEmployeeTable = (props: IUseCustomCommonTable) => {
  const { getAllEmployee, queryKey } = useService()
  const { search, filters, variables = {} } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllEmployee,
    queryKey,
    filters,
    search,
    variables
  })

  return {
    useTableReturn,
  }
}

export default useSystemEmployeeTable
