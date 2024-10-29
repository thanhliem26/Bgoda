import { TableProps } from "antd"
import dayjs from "dayjs";
import AppTag from "shared/components/AppTag";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { BusinessPartner } from "shared/schema/business-partner";
import { Room } from "shared/schema/room";
import { Box, FlexBox } from "shared/styles";
import { Tiny } from "shared/styles/Typography";
import { convertCurrency } from "shared/utils/convert-string";

export const columns = (
  actions: TOptionItem<Room>[],
): TableProps<Room>['columns'] => [
    {
      title: 'Room',
      dataIndex: 'id',
      key: 'id',
      render: (text, rowData) => {
        return <FlexBox style={{alignItems: 'center', gap: '8px'}}>
          <Box style={{ width: '50px', height: '50px', overflow: 'hidden', borderRadius: '50%' }}><img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',

          }} src={rowData?.thumbnail ? rowData?.thumbnail : '/static/avatar/001-man.svg'} /></Box>
          <Tiny style={{fontWeight: 'bold'}}>{rowData?.name}</Tiny>
        </FlexBox>
      },
      width: 300,
    },
    {
      title: 'Company name',
      dataIndex: 'businessPartnerId',
      key: 'businessPartnerId',
      width: 300,
      render: (name, rowData) => {
        return <Tiny>{rowData?.businessPartner?.name}</Tiny>
      },
    },
    {
      title: 'Available',
      dataIndex: 'avaiable',
      key: 'avaiable',
      width: 200,
      render: (avaiable) => {
        return <Tiny>{avaiable}</Tiny>
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 200,
      render: (price) => {
        return <Tiny>{convertCurrency(price)} VND</Tiny>
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
