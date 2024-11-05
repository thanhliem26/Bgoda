import { Switch, TableProps } from 'antd'
import dayjs from 'dayjs'
import { ActionGroupButtons } from 'shared/components/table/components/ActionGroupButton'
import { TOptionItem } from 'shared/components/table/hooks/useBuildActionTable'
import { Bank } from 'shared/schema/bank'
import { Box, FlexBox } from 'shared/styles'
import { Tiny } from 'shared/styles/Typography'

export const columns = (
  actions: TOptionItem<Bank>[]
): TableProps<Bank>['columns'] => [
  {
    title: 'Bank name',
    dataIndex: 'bankName',
    key: 'bankName',
    render: (text, rowData) => {
      return (
        <FlexBox style={{ alignItems: 'center', gap: '8px' }}>
          <Box
            style={{
              width: '50px',
              height: '50px',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={rowData?.logo ? rowData?.logo : '/static/avatar/001-man.svg'}
            />
          </Box>
          <Tiny style={{ fontWeight: 'bold', flex: 1 }}>{text}</Tiny>
        </FlexBox>
      )
    },
    width: 300,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return <Switch checked={status} />
    },
  },
  {
    title: 'Owner name',
    dataIndex: 'ownerName',
    key: 'ownerName',
    width: 300,
    render: (ownerName) => {
      return <Tiny>{ownerName}</Tiny>
    },
  },
  {
    title: 'Bank number',
    dataIndex: 'bankNumber',
    key: 'bankNumber',
    width: 200,
    render: (bankNumber) => {
      return <Tiny>{bankNumber}</Tiny>
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
    },
  },
  {
    title: 'Action',
    key: 'action',
    width: 100,
    render: (_, record) => (
      <ActionGroupButtons
        actions={actions}
        rowId={record?.id}
        rowData={record}
      />
    ),
  },
]