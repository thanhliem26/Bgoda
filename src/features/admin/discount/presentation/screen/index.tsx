import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
} from '@ant-design/icons'
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useDiscountTable from "../../hooks/useDiscountTable";
import useActionTable from "../../hooks/useActionTable";
import CreateDiscountModal from "../page-sections/CreateDiscountModal";
import UpdateDiscountModal from "../page-sections/UpdateDiscountModal";
import DeleteDiscountModal from "../page-sections/DeleteDiscountModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailBusinessPartnerModal from "../page-sections/DetailBusinessPartnerModal";
import DiscountIcon from '@mui/icons-material/Discount';
import useAuth from "features/authorization/hooks/useAuth";
import { TYPE_ACCOUNT_LOGIN } from "contexts/Authentication";
import { useMemo } from "react";

const AdminUser = () => {
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
    if (showAdd) return actions;

    return actions.filter((item) => item.key === 'detail')
  }, [showAdd])

  const { useTableReturn } = useDiscountTable({});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: newActions
  })

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Discount"} Icon={<DiscountIcon />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            {/* <SearchInput placeholder="Search by company name" onChange={(event) => {
              handleSearch(event.target.value)
            }} /> */}
          </Box>
          <Box>
            {showAdd && <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new discount
            </ButtonBase>}
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateDiscountModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateDiscountModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteDiscountModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailBusinessPartnerModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminUser