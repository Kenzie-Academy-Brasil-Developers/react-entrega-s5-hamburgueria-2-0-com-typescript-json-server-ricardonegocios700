import { Button } from "@material-ui/core";

interface MButtonProps {
  title: string;
}

const MButton = ({ title }: MButtonProps) => {
  return (
    <>
      <Button variant="contained" color="success">
        {title}
      </Button>
    </>
  );
};

export default MButton;
