import { Switch, TableProps } from "antd"
import dayjs from "dayjs";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { Booking } from "shared/schema/booking";
import { Tiny } from "shared/styles/Typography";
import { convertCurrency } from "shared/utils/convert-string";

export const columns = (
  actions: TOptionItem<Booking>[],
): TableProps<Booking>['columns'] => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, rowData) => {
        return  <Tiny style={{fontWeight: 'bold'}}>{text}</Tiny>
      },
      width: 300,
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 300,
      render: (phoneNumber) => {
        return <Tiny>{phoneNumber}</Tiny>
      },
    },
    {
      title: 'Total price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: 200,
      render: (totalPrice) => {
        return <Tiny>{convertCurrency(totalPrice)} VND</Tiny>
      },
    },
    {
      title: 'Received',
      dataIndex: 'approved',
      key: 'approved',
      width: 200,
      render: (approved) => {
        return  <Switch checked={approved} />
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
