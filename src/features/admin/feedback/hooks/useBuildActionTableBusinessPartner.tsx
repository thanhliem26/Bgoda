import { IuseUserActionTableReturn } from './useActionTable'
import { useBuildActionsTable } from 'shared/components/table/hooks/useBuildActionTable'
import {
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { Rating } from 'shared/schema/rating'

export enum ActionsTableRoleTemplate {
  DELETE = 'delete',
  EDIT = 'edit',
  UN_APPROVE = 'un_approve',
}

function useBuildActionsTableBusinessPartner({
  handleOpenEdit,
  handleOpenDelete,
  handleOpenUnApprove
}: IuseUserActionTableReturn) {
  const useBuildActionsTableReturn = useBuildActionsTable<
    ActionsTableRoleTemplate,
    Rating
  >({
    actions: {
      edit: {
        key: ActionsTableRoleTemplate.EDIT,
        onClick: (id) => {
          handleOpenEdit(id)
        },
        label: "Approve",
        icon: <EditOutlined />,
      },
      un_approve: {
        key: ActionsTableRoleTemplate.UN_APPROVE,
        onClick: (id) => {
          handleOpenUnApprove(id)
        },
        label: "Un approve",
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
