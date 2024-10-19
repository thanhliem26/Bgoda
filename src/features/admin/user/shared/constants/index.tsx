import { TableProps } from "antd"
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { User } from "shared/schema/user"

export const columns = (
  actions: TOptionItem<User>[],
): TableProps<User>['columns'] => [
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 200,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
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
