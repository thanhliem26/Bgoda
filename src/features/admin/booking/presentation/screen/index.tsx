import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import TableBase from "shared/components/table";
import useBookingTable from "../../hooks/useBookingTable";
import useActionTable from "../../hooks/useActionTable";
import UpdateReceiveBookingModal from "../page-sections/UpdateReceiveBookingModal";
import DeleteBookingModal from "../page-sections/DeleteBookingModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailBookingModal from "../page-sections/DetailBookingModal";
import MoreIcon from '@mui/icons-material/More';
import ActiveAutoComplete, { RECEIVE_DATA } from "shared/components/autocomplete/active-auto-complete";
import { useMemo, useState } from "react";
import useAuth from "features/authorization/hooks/useAuth";
import { TYPE_ACCOUNT_LOGIN } from "contexts/Authentication";

const AdminBooking = () => {
  const useActionTableReturn = useActionTable()
  // const [search, setSearch] = useState<string>('');
  const [received, setReceived] = useState(RECEIVE_DATA.NOT_RECEIVED);

  const {
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openDetail,
    setOpenDetail,
    rowId } = useActionTableReturn

  const { type } = useAuth()
  const showAdd = TYPE_ACCOUNT_LOGIN.BUSINESS_PARTNER === type;
  const { actions } = useBuildActionsTableBusinessPartner(useActionTableReturn)

  const newActions = useMemo(() => {
    if (showAdd) return actions;

    return actions.filter((item) => item.key === 'detail')
  }, [showAdd])
  const { useTableReturn } = useBookingTable({
    filters: {
      isReceived: received === RECEIVE_DATA.RECEIVED
    }
  });
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: newActions
  })

  // const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Booking"} Icon={<MoreIcon />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            {/* <SearchInput placeholder="Search by name" onChange={(event) => {
              handleSearch(event.target.value)
            }} /> */}
            <ActiveAutoComplete label="Received" value={received} onChange={setReceived} />
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openEdit && <UpdateReceiveBookingModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteBookingModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailBookingModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminBooking