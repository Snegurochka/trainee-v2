import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly value?: string;
  readonly label?: string;
  readonly error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Input = forwardRef((props: InputProps, forwardedRef: React.ForwardedRef<HTMLInputElement>) => {
  const { value, onChange, type = "text", label, ...rest } = props;
  return (
    <p>
      <label>{label}</label>
      <InputWrapper ref={forwardedRef} value={value} onChange={onChange} {...rest} type={type} />
    </p>
  );
});
