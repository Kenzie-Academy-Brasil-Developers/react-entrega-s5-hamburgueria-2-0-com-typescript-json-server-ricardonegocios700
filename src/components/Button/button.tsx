import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
// import Button from "@material-ui/core/Button";

interface MButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MButton = ({ children, ...rest }: MButtonProps) => {
  return (
    <Button>
      <button {...rest}>{children}</button>
    </Button>
  );
};

export default MButton;
