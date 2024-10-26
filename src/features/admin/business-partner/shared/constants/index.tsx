import { TableProps } from "antd"
import dayjs from "dayjs";
import AppTag from "shared/components/AppTag";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { BusinessPartner } from "shared/schema/business-partner";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<BusinessPartner>[],
): TableProps<BusinessPartner>['columns'] => [
    {
      title: 'Company name',
      dataIndex: 'companyName',
      key: 'companyName',
      render: (text) => {
        return <b>{text}</b>;
      },
      width: 300,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 300,
      render: (email) => {
        return <Tiny>{email}</Tiny>
      },
    },
    {
      title: 'Role',
      dataIndex: 'roleName',
      key: 'roleName',
      width: 200,
      render: (role) => {
        return <AppTag color="green">{role}</AppTag>
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
      width: 200,
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
