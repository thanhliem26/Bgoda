import { DatePicker, DatePickerProps, Skeleton } from "antd"
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

  & .ant-picker {
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

interface IAppDatePickerProps extends DatePickerProps {
  loading?: boolean
  label?: string
}

const AppDatePicker: FC<IAppDatePickerProps> = (props) => {
  const { loading = false, label, required, value, ...inputProps } = props

  return loading ? (
    <Skeleton.Input active={false} size={'default'} />
  ) : (
    <Wrapper>
       <DatePicker
        placeholder=" "
        style={{ padding: '12px 12px 8px' }} 
        size="middle"
        value={value}
        {...inputProps}
      />
      {!value && <label className="floating-label">{label} {required && <Span style={{color: 'red'}}>*</Span>}</label>}
    </Wrapper>

  )
}

export default AppDatePicker