import { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';

export interface ITabType {
    key: string;
        label: string;
        children: React.ReactNode;
} 
interface ITabProps extends Omit<TabsProps, 'onChange'> {
    items: ITabType[];
}

const AppStyleTabs = styled(Tabs)`
    width: 100%;
`

const AppTabComponent = (props: ITabProps) => {
    const { items = [], ...inputProps } = props;

    return (
        <AppStyleTabs items={items}  {...inputProps} />
    );
};

export default AppTabComponent;
