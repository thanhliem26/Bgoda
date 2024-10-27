import { Upload, UploadProps } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { uploadImage } from './functions';

const AppUploadComponent = styled(Upload)`
    display: block;
    width: 100%;
    height: 100%;

    & .ant-upload  {
        display: block;
    }
`

type TypeValueUpload<Multiple extends boolean> = Multiple extends true ? string[] : string;
interface IAppUpload<Multiple extends boolean> extends UploadProps {
    // value: TypeValueUpload<Multiple>
    // onChange
}

const AppUpload = <Multiple extends boolean = false>(props: IAppUpload<Multiple>) => {
    const { children, ...inputProps } = props;

    const dummyRequest = async ({ onSuccess = (txt: any) => txt }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
    return (
        <AppUploadComponent 
        customRequest={uploadImage} 

        {...inputProps}>
            {children}
        </AppUploadComponent>
    )
}

export default AppUpload