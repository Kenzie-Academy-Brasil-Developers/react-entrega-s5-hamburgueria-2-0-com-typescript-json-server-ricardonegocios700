import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
// import Button from "@material-ui/core/Button";

interface MButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonCor?: string;
  fontCor?: string;
}

const MButton = ({ children, buttonCor, fontCor, ...rest }: MButtonProps) => {
  return (
    <Button {...rest} buttonCor={buttonCor} fontCor={fontCor}>
      {children}
    </Button>
  );
};

export default MButton;
