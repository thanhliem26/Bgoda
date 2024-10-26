import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  BoxPlotOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useRoomTypeTable from "../../hooks/useRoomTypeTable";
import useActionTable from "../../hooks/useActionTable";
import CreateRoomTypeModal from "../page-sections/CreateRoomTypeModal";
import UpdateRoomTypeModal from "../page-sections/UpdateRoomTypeModal";
import DeleteRoomTypeModal from "../page-sections/DeleteRoomTypeModal";
import useBuildActionTableRoleTemplate from "../../hooks/useBuildActionTableRoleTemplate";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailRoomTypeModal from "../page-sections/DetailRoomTypeModal";

const AdminRoomType = () => {
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
        <IconScreen textLabel={"Room type"} Icon={<BoxPlotOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name" />
          </Box>
          <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new room type
            </ButtonBase>
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateRoomTypeModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateRoomTypeModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteRoomTypeModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailRoomTypeModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminRoomType