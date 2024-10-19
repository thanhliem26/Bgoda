import { Button, Dropdown, Flex, Menu, Space } from "antd"
import { Fragment } from "react/jsx-runtime"
import {
    EllipsisOutlined,
} from '@ant-design/icons'
import { TOptionItem } from "../hooks/useBuildActionTable"
import styled from "styled-components"
import { Tiny } from "shared/styles/Typography"

interface IActionGroupButtons<T> {
    actions: TOptionItem<T>[]
    rowId: string
    rowData: T
}

const MenuComponent = styled(Menu)`
min-width: 192px;
& .ant-dropdown-menu-item {
    height: 36px;
}
& .ant-dropdown-menu-title-content p {
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.85px;
    color: rgb(11, 14, 30);
}
 
`

export const ActionGroupButtons = <T extends object>({
    actions,
    rowId,
    rowData,
}: IActionGroupButtons<T>) => {

    return (
        <Fragment>
            <Dropdown
                overlay={<MenuComponent>
                    {actions.map((item) => {
                        return <Menu.Item key={item.key} onClick={() => { item.onClick?.(rowId, rowData) }}>
                            <Flex gap={8}>
                                {item.icon} <Tiny>{item.label}</Tiny>
                            </Flex>
                        </Menu.Item>
                    })}
                </MenuComponent>}
                trigger={['click']}>
                <Button>
                    <Space>
                        <EllipsisOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Fragment>
    )
}
