import { Input, Skeleton } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FC } from "react";
import { Box } from "shared/styles";
import { Span } from "shared/styles/Typography";
import styled from "styled-components";

const Wrapper = styled(Box)`
  position: relative;

  .floating-label {
    position: absolute;
    left: 12px;
    top: 20%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #999;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  textarea:focus + .floating-label,
  textarea:not(:placeholder-shown) + .floating-label {
    top: 10px;
    transform: translateY(-100%);
    font-size: 12px;
    background: white;
    padding: 0 10px 0 5px;
  }
`;

interface IAppTextAreaProps extends Omit<TextAreaProps, 'placeholder'> {
  loading?: boolean;
  label?: string;
}

const AppTextArea: FC<IAppTextAreaProps> = (props) => {
  const { loading = false, label, required, ...inputProps } = props;

  return loading ? (
    <Skeleton.Input active={false} size={'default'} />
  ) : (
    <Wrapper>
      <Input.TextArea
        placeholder=" "
        rows={4}
        {...inputProps}
      />
      <label className="floating-label">
        {label} {required && <Span style={{ color: "red" }}>*</Span>}
      </label>
    </Wrapper>
  );
};

export default AppTextArea;
