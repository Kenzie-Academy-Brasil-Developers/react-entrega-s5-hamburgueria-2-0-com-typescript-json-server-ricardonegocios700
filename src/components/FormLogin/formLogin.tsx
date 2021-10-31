import Input from "../Input/input";
import MButton from "../Button/button";

import { Container, FormInputs } from "./styled";

const FormLogin = () => {
  const handleClick = () => {
    console.log("handleClick in formLogin");
  };
  return (
    <Container>
      <h3>Login</h3>
      <FormInputs>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <MButton onClick={handleClick}>Logar</MButton>
      </FormInputs>
    </Container>
  );
};

export default FormLogin;
