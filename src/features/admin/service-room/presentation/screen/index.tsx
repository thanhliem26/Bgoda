import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useRoomTypeTable from "../../hooks/useRoomTypeTable";
import useActionTable from "../../hooks/useActionTable";
import CreateServiceRoomModal from "../page-sections/CreateServiceRoomModal";
import UpdateRoomTypeModal from "../page-sections/UpdateRoomTypeModal";
import DeleteRoomTypeModal from "../page-sections/DeleteRoomTypeModal";
import useBuildActionTableRoleTemplate from "../../hooks/useBuildActionTableRoleTemplate";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailRoomTypeModal from "../page-sections/DetailRoomTypeModal";

const AdminServiceRoom = () => {
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

  const { actions } = useBuildActionTableRoleTemplate(useActionTableReturn)

  const { useTableReturn } = useRoomTypeTable({variables: {indexPage: 1}});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Service room"} Icon={<SettingOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name" />
          </Box>
          <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new service room
            </ButtonBase>
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateServiceRoomModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateRoomTypeModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteRoomTypeModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailRoomTypeModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminServiceRoom