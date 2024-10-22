import { InputNumber, InputNumberProps, Skeleton } from "antd";
import { FC, useState } from "react";
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

  .focused-label {
    top: 10px;
    transform: translateY(-100%);
    font-size: 12px;
    background: white;
    padding: 0 10px 0 5px;
  }
`;

interface IAppNumberFieldProps extends Omit<InputNumberProps, 'placeholder'> {
  loading?: boolean;
  label?: string;
}

const AppNumberField: FC<IAppNumberFieldProps> = (props) => {
  const { loading = false, label, required, value, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const isFloating = focused || value; // Kiểm tra nếu focus hoặc có value

  return loading ? (
    <Skeleton.Input active={false} size={"default"} />
  ) : (
    <Wrapper>
      <InputNumber
        value={value}
        placeholder=" "
        style={{ width: "100%" }}
        size="large"
        {...inputProps}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label className={`floating-label ${isFloating ? 'focused-label' : ''}`}>
        {label} {required && <Span style={{ color: "red" }}>*</Span>}
      </label>
    </Wrapper>
  );
};

export default AppNumberField;
