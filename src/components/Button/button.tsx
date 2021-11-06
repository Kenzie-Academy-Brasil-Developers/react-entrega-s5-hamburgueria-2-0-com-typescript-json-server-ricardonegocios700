import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@material-ui/core";

interface MButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MButton = ({ children, ...rest }: MButtonProps) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default MButton;
