interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = (props: InputProps) => {
  const { value, onChange, type = "text", ...rest } = props;
  return <input value={value} onChange={onChange} {...rest} type={type} />;
};
