import { TableProps } from "antd"
import dayjs from "dayjs";
import AppTag from "shared/components/AppTag";
import { PermissionLabel, TypePermissionLabel } from "shared/components/autocomplete/permission-auto-complete";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { BusinessPartner } from "shared/schema/business-partner";
import { RoleTemplate } from "shared/schema/role-template";
import { FlexBox } from "shared/styles";
import { Tiny } from "shared/styles/Typography";
import { convertStringToArray } from "shared/utils/convert-string";

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
