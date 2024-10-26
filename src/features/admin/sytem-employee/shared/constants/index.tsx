import { TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { Employee } from "shared/schema/system-empoyee";
import { Tiny } from "shared/styles/Typography";
import { convertCurrency } from "shared/utils/convert-string";

export const columns = (
  actions: TOptionItem<Employee>[],
): TableProps<Employee>['columns'] => [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text) => {
        return <b>{text}</b>;
      },
      width: 300,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      render: (email) => {
        return <Tiny>{email}</Tiny>
      },
    },
    {
      title: 'Role',
      dataIndex: 'roleId',
      key: 'roleId',
      width: 200,
      render: (role) => {
        return <Tiny>{role}</Tiny>
      },
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      width: 200,
      render: (salary) => {
        return <Tiny>{convertCurrency(salary)} VND</Tiny>
      },
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 200,
      render: (phoneNumber) => {
        return <Tiny>{phoneNumber}</Tiny>
      },
    },
    {
      title: 'Created date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      sorter: true,
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
