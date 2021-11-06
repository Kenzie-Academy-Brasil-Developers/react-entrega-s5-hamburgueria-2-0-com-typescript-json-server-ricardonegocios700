import TextField from "@material-ui/core/TextField";

interface MInput {
  placeholder: string;
}

const MInput = ({ placeholder, ...rest }: MInput) => {
  return (
    <>
      <TextField placeholder={placeholder} {...rest} />
    </>
  );
};

export default MInput;
