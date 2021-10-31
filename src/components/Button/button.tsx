import { Button } from "@material-ui/core";
import { InputHTMLAttributes, ReactNode } from "react";

interface MButtonProps {
  children: ReactNode;
}

const MButton = ({ children }: MButtonProps) => {
  return (
    <>
      <Button variant="contained" color="success">
        {children}
      </Button>
    </>
  );
};

export default MButton;
