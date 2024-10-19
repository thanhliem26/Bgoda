import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import { MenuProps, message } from "antd";
import useTeamTable from "../../hooks/useUserTable";
import useActionTable from "../../hooks/useActionTable";
import CreateUserModal from "../page-sections/CreateUserModal";
import UpdateUserModal from "../page-sections/UpdateUserModal";
import DeleteUserModal from "../page-sections/DeleteUserModal";
import useBuildActionsTableUser from "../../hooks/useBuildActionTableUser";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";

const AdminUser = () => {
  const useActionTableReturn = useActionTable()
  const { openCreate,
    setOpenCreate,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    rowId } = useActionTableReturn

  const { actions } = useBuildActionsTableUser(useActionTableReturn)

  const { useTableReturn } = useTeamTable({ search: { name: '' } });
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Users"} Icon={<UserOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name, email" />
          </Box>
          <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new user
            </ButtonBase>
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateUserModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateUserModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteUserModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
    </Box>
  )
}

export default AdminUser