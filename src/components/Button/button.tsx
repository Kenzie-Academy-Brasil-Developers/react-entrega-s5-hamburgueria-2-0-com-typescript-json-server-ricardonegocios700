import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
// import Button from "@material-ui/core/Button";

interface MButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonCor?: string;
  fontCor?: string;
  size?: string;
}

const MButton = ({
  //size = "large",
  size,
  children,
  buttonCor,
  fontCor,
  ...rest
}: MButtonProps) => {
  return (
    <Button {...rest} buttonCor={buttonCor} fontCor={fontCor} size={size}>
      {children}
    </Button>
  );
};

export default MButton;
