import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import TableBase from "shared/components/table";
import useActionTable from "../../hooks/useActionTable";
import UpdateApproveModal from "../page-sections/UpdateApproveModal";
import DeleteBookingModal from "../page-sections/DeleteBookingModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import MoreIcon from '@mui/icons-material/More';
import { useState } from "react";
import useRatingTable from "../../hooks/useRatingTable";
import UnUpdateApproveModal from "../page-sections/UnApproveModal";
import ApproveAutoComplete, { APPROVE_DATA } from "shared/components/autocomplete/approve-auto-complete";

const AdminFeedback = () => {
  const useActionTableReturn = useActionTable()
  const [received, setReceived] = useState(APPROVE_DATA.UN_APPROVE);

  const {
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openUnApprove,
    setOpenUnApprove,
    rowId } = useActionTableReturn

  const { actions } = useBuildActionsTableBusinessPartner(useActionTableReturn)

  const { useTableReturn } = useRatingTable({
    filters: {
      type: received
    }
  });
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: actions
  })

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Rating"} Icon={<MoreIcon />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <ApproveAutoComplete label="Type" value={received} onChange={setReceived} />
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openUnApprove && <UnUpdateApproveModal open={openUnApprove} setOpen={setOpenUnApprove} id={rowId.current} />}
      {openEdit && <UpdateApproveModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteBookingModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
    </Box>
  )
}

export default AdminFeedback