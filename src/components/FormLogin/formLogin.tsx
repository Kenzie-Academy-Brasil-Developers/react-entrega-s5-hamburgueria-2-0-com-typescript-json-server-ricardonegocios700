import Input from "../Input/input";
import MButton from "../Button/button";

import { Container, FormInputs } from "./styled";

const FormLogin = () => {
  return (
    <Container>
      <h3>Login</h3>
      <FormInputs>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <MButton title="Logar" />
      </FormInputs>
    </Container>
  );
};

export default FormLogin;
