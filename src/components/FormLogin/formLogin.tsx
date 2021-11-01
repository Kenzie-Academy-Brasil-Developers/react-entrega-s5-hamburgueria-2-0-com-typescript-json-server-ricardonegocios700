import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../Providers/Auth/auth";

import { Container, FormInputs } from "./styled";
//import Input from "../Input/input";
import MButton from "../Button/button";

//tipagem
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <FormInputs>
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <MButton type="submit">MButton</MButton>
        </FormInputs>
      </form>
    </Container>
  );
};

export default FormLogin;
