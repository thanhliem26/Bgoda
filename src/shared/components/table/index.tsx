import { Table, TableProps } from 'antd'
import styled from 'styled-components'
import { Box } from 'shared/styles'
import { ColumnType } from 'antd/es/table'
import { IuseCustomTableReturn } from './hooks/useCustomTable'
import { useMemo } from 'react'

const StyledTableWrapper = styled(Box)`
  width: 100%;
  & .ant-table {
    & .ant-table-container .ant-table-content {
      & .ant-table-thead tr th {
        background-color: ${({ theme }) => theme.colors.shallow};
        color: ${({ theme }) => theme.colors.shallow_text};
        font-size: 13px;
        font-weight: 500;
        line-height: 15.85px;
        vertical-align: inherit;
        text-align: left;
        font-size: 13px;
        font-weight: 500;
        line-height: 15.85px;
        padding: 13px 16px;
        word-break: break-word;
        border-bottom: 1px solid rgb(227, 230, 235);
        border-top: 1px solid rgb(227, 230, 235);
        display: table-cell;
        height: 48px;

        &::before {
          width: 0;
        }
      }

      & .ant-table-tbody tr td {
        font-family: Montserrat, sans-serif;
        vertical-align: inherit;
        text-align: left;
        font-size: 13px;
        font-weight: 500;
        line-height: 15.85px;
        padding: 13px 16px;
        word-break: break-word;
        border-bottom: 1px solid rgb(227, 230, 235);
        color: rgb(77, 96, 122);
        background-color: rgb(255, 255, 255);
        display: table-cell;
        height: 72px;
      }
    }
  }
`

interface ICustomizeTable<T> extends Omit<TableProps<T>, 'dataSource'> {
  columns: ColumnType<T>[]
  useTableReturn: IuseCustomTableReturn
}

const CustomizeTable = <T extends object>(props: ICustomizeTable<T>) => {
  const { columns, useTableReturn, ...otherProps } = props

  const columnData = useMemo(() => columns, [columns])
  const {
    sortData,
    // error,
    handleSorTable,
    // isLoading,
    // refetch,
    // status,
    totalRecord,
    handleChangePagination,
    variables
  } = useTableReturn
  console.log('sortData', sortData)
  return (
    <StyledTableWrapper>
      <Table
        columns={columnData}
        onChange={(pagination, filter, sorter) => {
          //@ts-ignore
          handleSorTable(sorter.field, sorter.order)
        }}

        dataSource={sortData}
        pagination={{
          showSizeChanger: true,
          total: totalRecord,
          current: variables.pagination.page,
          onChange(page, pageSize) {
            handleChangePagination(page, pageSize)
          },
        }}
        {...otherProps}
      />
    </StyledTableWrapper>
  )
}

export default CustomizeTable
