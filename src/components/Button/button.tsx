import { Button } from "@material-ui/core";
import { ReactNode } from "react";

interface MButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const MButton = ({ children, onClick }: MButtonProps) => {
  return (
    <>
      <Button variant="contained" color="success" onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default MButton;
