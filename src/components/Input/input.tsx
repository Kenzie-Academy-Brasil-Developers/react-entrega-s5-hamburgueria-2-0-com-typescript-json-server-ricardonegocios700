import { TextField } from "@material-ui/core";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <TextField
      label={placeholder}
      variant="outlined"
      color="primary"
      {...rest}
    />
  );
};

export default Input;
