import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
const Input = ({ placeholder, ...rest }: InputProps) => {
  return <input placeholder={placeholder} {...rest} />;
};

export default Input;
