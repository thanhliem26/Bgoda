import IconScreen from "shared/components/utils/IconScreen"
import { Box, FlexBox, WrapperContainer } from "shared/styles"
import {
  HomeOutlined,
  PlusOutlined,
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
import DetailRoomModal from "../page-sections/DetailRoomModal";
import { useMemo, useState } from "react";
import debounce from "shared/utils/debounce";
import useAuth from "features/authorization/hooks/useAuth";
import { TYPE_ACCOUNT_LOGIN } from "contexts/Authentication";
import RoomTypeAutoComplete from "shared/components/autocomplete/room-type-auto-complete-base";
import BusinessPartnerAutoComplete from "shared/components/autocomplete/business-partner-auto-complete";

const AdminRoom = () => {
  const useActionTableReturn = useActionTable()
  const [search, setSearch] = useState<string>('');
  const [roomType, setRoomType] = useState<number>();
  const [businessPartner, setBusinessPartner] = useState<number>();

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

  const { useTableReturn } = useRoleTemplateTable({ search: { searchName: search }, filters: { roomTypeId: roomType, businessPartnerId: businessPartner } });
  const { columnTable } = useBuildColumnTable({
    columns: columns,
    actions: newActions
  })

  const handleSearch = debounce(setSearch, 500)

  return (
    <Box style={{ paddingTop: 16, paddingBottom: 32 }}>
      <Box>
        <IconScreen textLabel={"Room"} Icon={<HomeOutlined />} />
      </Box>
      <WrapperContainer style={{ marginTop: '20px' }}>
        <FlexBox style={{ justifyContent: 'space-between', padding: '12px', marginTop: '16px' }}>
          <FlexBox style={{ flexDirection: 'column', gap: 8 }}>
            <Box style={{ width: '400px', maxWidth: '100%' }}>
              <SearchInput placeholder="Search by name room" onChange={(event) => {
                handleSearch(event.target.value)
              }} />
            </Box>
            <FlexBox style={{ gap: '16px' }}>
              <RoomTypeAutoComplete value={roomType} onChange={setRoomType} style={{ width: '150px' }} label="Room type" />

              {!showAdd && <BusinessPartnerAutoComplete value={businessPartner} onChange={setBusinessPartner} style={{ width: '200px' }} label="Business partner" />}

            </FlexBox>
          </FlexBox>
          <Box>
            {showAdd && <ButtonBase icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>
              Add a new room
            </ButtonBase>}

          </Box>
        </FlexBox>
        <FlexBox>
          <TableBase columns={columnTable} useTableReturn={useTableReturn} />
        </FlexBox>
      </WrapperContainer>

      {openCreate && <CreateRoomModal open={openCreate} setOpen={setOpenCreate} />}
      {openEdit && <UpdateRoomModal open={openEdit} setOpen={setOpenEdit} id={rowId.current} />}
      {openDelete && <DeleteRoomModal open={openDelete} setOpen={setOpenDelete} id={rowId.current} />}
      {openDetail && <DetailRoomModal open={openDetail} setOpen={setOpenDetail} id={rowId.current} />}
    </Box>
  )
}

export default AdminRoom