import { TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { ServiceRoom } from "shared/schema/service-room";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<ServiceRoom>[],
): TableProps<ServiceRoom>['columns'] => [
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
        return <Tiny>{text}</Tiny>;
      },
      width: 300,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 200,
      render: (text) => {
        return <Tiny>{text}</Tiny>;
      },
    },
    {
      title: 'Created date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 300,
      sorter: true,
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
