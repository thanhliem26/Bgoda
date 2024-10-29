import { TableProps } from "antd"
import dayjs from "dayjs";
import AppTag from "shared/components/AppTag";
import { PermissionLabel, TypePermissionLabel } from "shared/components/autocomplete/permission-auto-complete";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { RoleTemplate } from "shared/schema/role-template";
import { FlexBox } from "shared/styles";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<RoleTemplate>[],
): TableProps<RoleTemplate>['columns'] => [
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
      width: 400,
      render: (_, rowData) => {

        return <FlexBox style={{flexWrap: 'wrap', gap: '16px'}}>{rowData?.permission.map((item, idx) => {
          return <AppTag key={idx}>{PermissionLabel?.[item as TypePermissionLabel]}</AppTag>
        })}</FlexBox>;
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
