import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  CustomerServiceOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useRoomTypeTable from "../../hooks/useRoomTypeTable";
import useActionTable from "../../hooks/useActionTable";
import CreateServiceRoomModal from "../page-sections/CreateServiceRoomModal";
import UpdateServiceRoomModal from "../page-sections/UpdateServiceRoomModal";
import DeleteServiceRoomModal from "../page-sections/DeleteServiceRoomModal";
import useBuildActionTableRoleTemplate from "../../hooks/useBuildActionTableRoleTemplate";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailRoomServiceModal from "../page-sections/DetailRoomServiceModal";
import { useState } from "react";
import debounce from "shared/utils/debounce";

const AdminServiceRoom = () => {
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

  const { actions } = useBuildActionTableRoleTemplate(useActionTableReturn)

  const { useTableReturn } = useRoomTypeTable({search: {searchName: search}});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  
  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Service room"} Icon={<CustomerServiceOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by name service" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
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
      {openEdit && <UpdateServiceRoomModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteServiceRoomModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailRoomServiceModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminServiceRoom