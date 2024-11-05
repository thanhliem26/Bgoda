import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useDiscountTable = (props: IUseCustomCommonTable) => {
  const { getAllDiscount, queryKey } = useService()
  const { search, filters, variables = {} } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllDiscount,
    queryKey,
    filters,
    search,
    variables
  })

  return {
    useTableReturn,
  }
}

export default useDiscountTable
