import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useRoleTemplateTable from "../../hooks/useRoleTemplateTable";
import useActionTable from "../../hooks/useActionTable";
import CreateRoomModal from "../page-sections/CreateRoomModal";
import UpdateRoomModal from "../page-sections/UpdateRoomModal";
import DeleteRoomModal from "../page-sections/DeleteRoomModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailRoleTemplateModal from "../page-sections/DetailRoleTemplateModal";
import { useState } from "react";
import debounce from "shared/utils/debounce";

const AdminRoom = () => {
  const useActionTableReturn = useActionTable()
  const [search, setSearch] = useState<string>('');

  const { openCreate,
    setOpenCreate,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openDetail,
    setOpenDetail,
    rowId } = useActionTableReturn

  const { actions } = useBuildActionsTableBusinessPartner(useActionTableReturn)

  const { useTableReturn } = useRoleTemplateTable({search: {searchName: search}});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Room"} Icon={<SettingOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name room" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
          </Box>
          <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new room
            </ButtonBase>
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateRoomModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateRoomModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteRoomModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailRoleTemplateModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminRoom