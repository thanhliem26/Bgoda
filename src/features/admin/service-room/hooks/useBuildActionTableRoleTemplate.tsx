import { IuseUserActionTableReturn } from './useActionTable'
import { useBuildActionsTable } from 'shared/components/table/hooks/useBuildActionTable'
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { ServiceRoom } from 'shared/schema/service-room'

export enum ActionsTableRoleTemplate {
  DELETE = 'delete',
  EDIT = 'edit',
  DETAIL = 'detail',
}

function useBuildActionsTableRoleTemplate({
  handleOpenEdit,
  handleOpenDelete,
  handleOpenDetail
}: IuseUserActionTableReturn) {
  const useBuildActionsTableReturn = useBuildActionsTable<
    ActionsTableRoleTemplate,
    ServiceRoom
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
        onClick: (id) => {
          handleOpenDelete(id)
        },
        label: "Delete",
        icon: <DeleteOutlined />,
      },
    },
  })
  return useBuildActionsTableReturn
}

export default useBuildActionsTableRoleTemplate