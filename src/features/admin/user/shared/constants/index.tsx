import { TableProps } from "antd"
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { User } from "shared/schema/user"

export const columns = (
  actions: TOptionItem<User>[],
): TableProps<User>['columns'] => [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 300
  },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => {
        return <b>{text}</b>;
      },
      width: 300,
    },
    {
      title: 'Date of birth',
      dataIndex: 'dob',
      key: 'dob',
      width: 200,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 300
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: 300
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <ActionGroupButtons actions={actions} rowId={record?.id} rowData={record} />
      ),
    },
  ]
