import { TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { User } from "shared/schema/user"
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<User>[],
): TableProps<User>['columns'] => [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 300,
    render: (text) => {
      return <Tiny>{text}</Tiny>;
    },
  },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => {
        return <Tiny>{text}</Tiny>;
      },
      width: 300,
    },
    {
      title: 'Date of birth',
      dataIndex: 'dob',
      key: 'dob',
      width: 200,
      render: (text) => {
        return <Tiny>{dayjs(text).format('DD-MM-YYYY')}</Tiny>;
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 300,
      render: (text) => {
        return <Tiny>{text}</Tiny>;
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phone',
      width: 300,
      render: (text) => {
        return <Tiny>{text}</Tiny>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <ActionGroupButtons actions={actions} rowId={record?.id} rowData={record} />
      ),
    },
  ]
