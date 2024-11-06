import { Upload, UploadFile, UploadProps } from 'antd'
import styled from 'styled-components';
import { uploadImage } from './functions';

const AppUploadComponent = styled(Upload)`
    display: block;
    width: 100%;
    height: 100%;

    & .ant-upload ant-upload-select {
        width: 100%;
    height: 100%;
    }

    & .ant-upload  {
        display: block;
        width: 100%;
        height: 100%;
    }
`

type TypeValueUpload<Multiple extends boolean> = Multiple extends true ? string[] : string;

type paramOnChange<Multiple extends boolean> = {file: TypeValueUpload<Multiple>}
type onChangeUpload<Multiple extends boolean> = (data: paramOnChange<Multiple>) => void;
interface IAppUpload<Multiple extends boolean> extends UploadProps {
    value?: TypeValueUpload<Multiple>
    multiple?: Multiple
    onChangeUpload: onChangeUpload<Multiple>
}

const AppUpload = <Multiple extends boolean = false>(props: IAppUpload<Multiple>) => {
    const { children, multiple = false, onChange, onChangeUpload, value = '', ...inputProps } = props;

    const handleChangeUpload = (file: UploadFile) => {
        if (multiple) {
            const newValue: TypeValueUpload<true> = [...(value as string[]), file?.response];
            onChangeUpload({file: newValue as TypeValueUpload<Multiple>});
        } else {
            onChangeUpload({file: file?.response as TypeValueUpload<Multiple>});
        }
    }

    return (
        <AppUploadComponent
            customRequest={uploadImage}
            onChange={(info) => {
                const { file } = info;
                if (file.status !== 'done') return;
                handleChangeUpload(file)
            }}
            multiple={multiple}
            {...inputProps}>
            {children}
        </AppUploadComponent>
    )
}

export default AppUpload