import { TableProps } from "antd"
import dayjs from "dayjs";
import { labelDiscountType } from "shared/components/autocomplete/discount-type-auto-complete";
import { ActionGroupButtons } from "shared/components/table/components/ActionGroupButton";
import { TOptionItem } from "shared/components/table/hooks/useBuildActionTable"
import { Discount } from "shared/schema/discount";
import { Box, FlexBox } from "shared/styles";
import { Tiny } from "shared/styles/Typography";

export const columns = (
  actions: TOptionItem<Discount>[],
): TableProps<Discount>['columns'] => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, rowData) => {
        return <FlexBox style={{alignItems: 'center', gap: '8px'}}>
          <Box style={{ width: '50px', height: '50px', overflow: 'hidden', borderRadius: '50%' }}><img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',

          }} src={rowData?.image ? rowData?.image : '/static/avatar/001-man.svg'} /></Box>
          <Tiny style={{fontWeight: 'bold'}}>{text}</Tiny>
        </FlexBox>
      },
      width: 300,
    },
    {
      title: 'Discount type',
      dataIndex: 'discountType',
      key: 'discountType',
      width: 300,
      render: (discountType) => {
        return <Tiny>{labelDiscountType(discountType)?.label}</Tiny>
      },
    },
    {
      title: 'Discount value',
      dataIndex: 'discountValue',
      key: 'discountValue',
      width: 200,
      render: (discountValue) => {
        return <Tiny>{discountValue}</Tiny>
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
