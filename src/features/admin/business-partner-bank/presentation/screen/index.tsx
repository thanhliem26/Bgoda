import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  BankOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useBusinessPartnerBankTable from "../../hooks/useBusinessPartnerBankTable";
import useActionTable from "../../hooks/useActionTable";
import CreateBankModal from "../page-sections/CreateBankModal";
import UpdateBankModal from "../page-sections/UpdateBankModal";
import DeleteBankModal from "../page-sections/DeleteBankModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailBankModal from "../page-sections/DetailBankModal";
import useAuth from "features/authorization/hooks/useAuth";
import { TYPE_ACCOUNT_LOGIN } from "contexts/Authentication";
import { useMemo } from "react";

const AdminBusinessPartnerBank = () => {
  const useActionTableReturn = useActionTable()

  const { openCreate,
    setOpenCreate,
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
    if(showAdd) return actions;
    
    return actions.filter((item) => item.key === 'detail')
  }, [showAdd])

  const { useTableReturn } = useBusinessPartnerBankTable({});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: newActions
  })

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Bank business partner"} Icon={<BankOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
          </Box>
          <Box>
            {showAdd && <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new bank
            </ButtonBase>}
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateBankModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateBankModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteBankModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailBankModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminBusinessPartnerBank