import { Input, Skeleton } from "antd"
import { FC } from "react"
import { InputBaseProps } from "shared/components/input"
import { Box } from "shared/styles";
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

interface IAppTextFieldProps extends Omit<InputBaseProps, 'placeholder'> {
  loading?: boolean
  label?: string
}

const AppTextField: FC<IAppTextFieldProps> = (props) => {
  const { loading = false, label, ...inputProps } = props
  return loading ? (
    <Skeleton.Input active={false} size={'default'} />
  ) : (
    <Wrapper>
       <Input
        placeholder=" "
        style={{ padding: '12px 12px 8px' }} 
        {...inputProps}
      />
      <label className="floating-label">{label}</label>
    </Wrapper>

  )
}

export default AppTextField