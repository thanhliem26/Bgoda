import { useNavigate } from 'react-router-dom'
import { IuseUserActionTableReturn } from './useActionTable'
import { useBuildActionsTable } from 'shared/components/table/hooks/useBuildActionTable'
import { User } from 'shared/schema/user'
import {
  UserOutlined,
} from '@ant-design/icons'

export enum ActionsTableUser {
  DELETE = 'delete',
  EDIT = 'edit',
  DETAIL = 'detail',
}

function useBuildActionsTableUser({
  handleOpenEdit,
  handleOpenDelete,
}: IuseUserActionTableReturn) {

  const navigate = useNavigate()
  const useBuildActionsTableReturn = useBuildActionsTable<
    ActionsTableUser,
    User
  >({
    actions: {
      detail: {
        key: ActionsTableUser.DETAIL,
        onClick: (id) => {
          navigate(`/dashboard/team-detail/${id}`)
        },
        label: "Detail",
        icon: <UserOutlined />,
      },
      edit: {
        key: ActionsTableUser.EDIT,
        onClick: (id) => {
          handleOpenEdit(id)
        },
        label: "Edit",
        icon: <UserOutlined />,
      },
      delete: {
        key: ActionsTableUser.DELETE,
        onClick: (id) => {
          handleOpenDelete(id)
        },
        label: "Delete",
        icon: <UserOutlined />,
      },
    },
  })
  return useBuildActionsTableReturn
}

export default useBuildActionsTableUser
