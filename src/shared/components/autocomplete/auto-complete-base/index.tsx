import { Select, SelectProps, Skeleton } from "antd"
import { FC } from "react"
import { Box } from "shared/styles";
import { Span } from "shared/styles/Typography";
import styled from "styled-components";

const Wrapper = styled(Box)`
  position: relative;

  .floating-label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #999;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  & .ant-select  {
    width: 100%;
  }

  input:focus + .floating-label,
  input:not(:placeholder-shown) + .floating-label {
    top: 10px;
    transform: translateY(-100%);
    font-size: 12px;
    /* color: #1890ff;  */
    background: white;
    padding: 0 10px 0 5px;
  }
`;

export interface IAutoCompleteBaseProps extends SelectProps {
    loading?: boolean
    label?: string
    required?: boolean
}

const AutoCompleteBase: FC<IAutoCompleteBaseProps> = (props) => {
    const { loading = false, label, required, value, ...inputProps } = props

    return loading ? (
        <Skeleton.Input active={false} size={'default'} />
    ) : (
        <Wrapper>
            <Select
                showSearch
                size="large"
                allowClear
                value={value}
                optionFilterProp={'label'}
                {...inputProps}
            />
           {!value && <label className="floating-label">{label} {required && <Span style={{ color: 'red' }}>*</Span>}</label>} 
        </Wrapper>

    )
}

export default AutoCompleteBase


