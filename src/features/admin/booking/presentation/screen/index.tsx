import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import TableBase from "shared/components/table";
import useDiscountTable from "../../hooks/useDiscountTable";
import useActionTable from "../../hooks/useActionTable";
import UpdateBookingModal from "../page-sections/UpdateBookingModal";
import DeleteBookingModal from "../page-sections/DeleteBookingModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailBookingModal from "../page-sections/DetailBookingModal";
import SearchInput from "shared/components/table/components/SearchInput";
import { useState } from "react";
import { debounce } from "lodash";
import MoreIcon from '@mui/icons-material/More';

const AdminBooking = () => {
  const useActionTableReturn = useActionTable()
  const [search, setSearch] = useState<string>('');

  const {
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openDetail,
    setOpenDetail,
    rowId } = useActionTableReturn

  const { actions } = useBuildActionsTableBusinessPartner(useActionTableReturn)

  const { useTableReturn } = useDiscountTable({});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Booking"} Icon={<MoreIcon />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
          </Box>
          {/* <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new discount
            </ButtonBase>
          </Box> */}
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openEdit && <UpdateBookingModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteBookingModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailBookingModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminBooking