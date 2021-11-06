import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormInputs } from "./styled";
import { TextField, Box } from "@material-ui/core";

import { useAuth } from "../../Providers/Auth/auth";

// não funciona:
import MButton from "../Button/button";
//import MInput from "../MInput/minput";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn } = useAuth();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Ops, esqueceu do email")
      .email("Ops, formato de email inválido"),
    password: yup
      .string()
      .required("Ops, esqueceu da senha")
      .min(6, "Ops, senha menor que o permitido(6)"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: UserData) => {
    signIn(data);
  };
  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
          <FormInputs>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              {...register("email")}
            />
            {errors.email?.message}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              {...register("password")}
            />
            {errors.password?.message}
            <MButton type="submit">MButton</MButton>
          </FormInputs>
        </form>
      </Box>
    </Container>
  );
};

export default FormLogin;
