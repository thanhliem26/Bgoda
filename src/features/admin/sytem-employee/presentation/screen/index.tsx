import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import SearchInput from "shared/components/table/components/SearchInput";
import ButtonBase from "shared/components/AppButton";
import TableBase from "shared/components/table";
import useSystemEmployeeTable from "../../hooks/useSystemEmployeeTable";
import useActionTable from "../../hooks/useActionTable";
import CreateSystemEmployeeModal from "../page-sections/CreateSystemEmployeeModal";
import DeleteEmployeeModal from "../page-sections/DeleteSystemEmployeeModal";
import useBuildActionsTableBusinessPartner from "../../hooks/useBuildActionTableBusinessPartner";
import useBuildColumnTable from "shared/components/table/hooks/useBuildColumnTable";
import { columns } from "../../shared/constants";
import DetailSystemEmployeeModal from "../page-sections/DetailSystemEmployeeModal";
import { useState } from "react";
import debounce from "shared/utils/debounce";
import UpdateSystemEmployeeModal from "../page-sections/UpdateEmployeeModal";

const SystemEmployee = () => {
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

  const { useTableReturn } = useSystemEmployeeTable({search: {searchName: search}});
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"System employee"} Icon={<SettingOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <Box style={{ width: '400px', maxWidth: '100%' }}>
            <SearchInput placeholder="Search by employee name" onChange={(event) => {
              handleSearch(event.target.value)
            }} />
          </Box>
          <Box>
            <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new employee
            </ButtonBase>
          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateSystemEmployeeModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateSystemEmployeeModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteEmployeeModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailSystemEmployeeModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default SystemEmployee