import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  UserOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import TableBase from "shared/components/table";
import useUserTable from "../../hooks/useUserTable";
import useActionTable from "../../hooks/useActionTable";
import UpdateUserModal from "../page-sections/UpdateUserModal";
import DeleteUserModal from "../page-sections/DeleteUserModal";
import useBuildActionsTableUser from "../../hooks/useBuildActionTableUser";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailUserModal from "../page-sections/DetailUserModal";
import { useState } from "react";
import debounce from "shared/utils/debounce";

const AdminUser = () => {
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

  const { actions } = useBuildActionsTableUser(useActionTableReturn)

  const { useTableReturn } = useUserTable({search: {searchName: search}});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Users"} Icon={<UserOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name, email" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openEdit && <UpdateUserModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteUserModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailUserModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminUser