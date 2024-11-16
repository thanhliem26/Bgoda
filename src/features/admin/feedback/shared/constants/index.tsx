import { TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { Rating } from "shared/schema/rating";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<Rating>[],
): TableProps<Rating>['columns'] => [
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'Comment',
      render: (text) => {
        return  <Tiny style={{fontWeight: 'bold'}}>{text}</Tiny>
      },
      width: 300,
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'Rate',
      width: 300,
      render: (rate) => {
        return <Tiny>{rate}</Tiny>
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
