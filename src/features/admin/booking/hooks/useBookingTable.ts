import useCustomTable from "shared/components/table/hooks/useCustomTable"
import { IUseCustomCommonTable } from "shared/components/table/interfaces"
import useService from "../domain/services"

const useBookingTable = (props: IUseCustomCommonTable) => {
  const { getAllBooking, queryKey } = useService()
  const { search, filters, variables = {} } = props

  const useTableReturn = useCustomTable({
    buildQuery: getAllBooking,
    queryKey,
    filters,
    search,
    variables
  })

  return {
    useTableReturn,
  }
}

export default useBookingTable
