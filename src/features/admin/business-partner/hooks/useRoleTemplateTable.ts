import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useRoleTemplateTable = (props: IUseCustomCommonTable) => {
  const { getAllBusinessPartner, queryKey } = useService()
  const { search, filters, variables = {} } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllBusinessPartner,
    queryKey,
    filters,
    search,
    variables
  })

  return {
    useTableReturn,
  }
}

export default useRoleTemplateTable
