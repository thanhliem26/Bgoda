import { TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { RoleTemplate } from "shared/schema/role-template";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<RoleTemplate>[],
): TableProps<RoleTemplate>['columns'] => [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
    width: 100
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
      title: 'Permission',
      dataIndex: 'permission',
      key: 'permission',
      width: 200,
    },
    {
      title: 'Created date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 300,
      render: (create_date) => {
        return <Tiny>{dayjs(create_date).format('HH:mm DD-MM-YYYY')}</Tiny>
      }
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (_, record) => (
        <ActionGroupButtons actions={actions} rowId={record?.id} rowData={record} />
      ),
    },
  ]
