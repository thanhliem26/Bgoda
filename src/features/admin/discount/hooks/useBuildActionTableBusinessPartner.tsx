import { IuseUserActionTableReturn } from './useActionTable'
import { useBuildActionsTable } from 'shared/components/table/hooks/useBuildActionTable'
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Discount } from 'shared/schema/discount'

export enum ActionsTableRoleTemplate {
  DELETE = 'delete',
  EDIT = 'edit',
  DETAIL = 'detail',
}

function useBuildActionsTableBusinessPartner({
  handleOpenEdit,
  handleOpenDelete,
  handleOpenDetail
}: IuseUserActionTableReturn) {
  const useBuildActionsTableReturn = useBuildActionsTable<
    ActionsTableRoleTemplate,
    Discount
  >({
    actions: {
      detail: {
        key: ActionsTableRoleTemplate.DETAIL,
        onClick: (id) => {
          handleOpenDetail(id)
        },
        label: "Detail",
        icon: <SearchOutlined />,
      },
      edit: {
        key: ActionsTableRoleTemplate.EDIT,
        onClick: (id) => {
          handleOpenEdit(id)
        },
        label: "Edit",
        icon: <EditOutlined />,
      },
      delete: {
        key: ActionsTableRoleTemplate.DELETE,
        onClick: (id, rowData) => {
          handleOpenDelete(rowData.id)
        },
        label: "Delete",
        icon: <DeleteOutlined />,
      },
    },
  })
  return useBuildActionsTableReturn
}

export default useBuildActionsTableBusinessPartner
