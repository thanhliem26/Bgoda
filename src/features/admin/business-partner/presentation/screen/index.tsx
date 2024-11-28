import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useRoleTemplateTable from "../../hooks/useRoleTemplateTable";
import useActionTable from "../../hooks/useActionTable";
import CreateBusinessPartnerModal from "../page-sections/CreateBusinessPartnerModal";
import UpdateBusinessPartnerModal from "../page-sections/UpdateBusinessPartnerModal";
import DeleteBusinessPartnerModal from "../page-sections/DeleteBusinessPartnerModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailBusinessPartnerModal from "../page-sections/DetailBusinessPartnerModal";
import { useMemo, useState } from "react";
import debounce from "shared/utils/debounce";
import useAuth from "features/authorization/hooks/useAuth";
import { TYPE_ACCOUNT_LOGIN } from "contexts/Authentication";

const AdminUser = () => {
  const useActionTableReturn = useActionTable()
  const [search, setSearch] = useState<string>('');
  const { type } = useAuth()

  const { openCreate,
    setOpenCreate,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openDetail,
    setOpenDetail,
    rowId } = useActionTableReturn

  const showAdd = TYPE_ACCOUNT_LOGIN.BUSINESS_PARTNER !== type;
  const { actions } = useBuildActionsTableBusinessPartner(useActionTableReturn)

  const newActions = useMemo(() => {
    if (showAdd) return actions;

    return actions.filter((item) => item.key !== 'delete' && item.key !== 'edit')
  }, [showAdd])
  const { useTableReturn } = useRoleTemplateTable({ search: { searchName: search } });
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: newActions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Business partner"} Icon={<TeamOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by company name" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
          </Box>
          <Box>
            {showAdd && <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new business partner
            </ButtonBase>}
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateBusinessPartnerModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateBusinessPartnerModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteBusinessPartnerModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailBusinessPartnerModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminUser