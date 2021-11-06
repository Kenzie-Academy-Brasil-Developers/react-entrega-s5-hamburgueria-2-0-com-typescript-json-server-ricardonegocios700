import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Box } from "@material-ui/core";
import { useHistory } from "react-router";

import { ContainerSection, FormInputs } from "./styled";
import { useAuth } from "../../Providers/Auth/auth";
import MButton from "../Button/button";
import imgLogin from "../../assets/img/imgLogin.png";

// não funciona:
//import MInput from "../MInput/minput";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const history = useHistory();
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
  const handleClick = () => {
    history.push("/cad_user");
  };
  return (
    <>
      <ContainerSection>
        <div>
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
              <MButton type="submit" buttonCor="#219653" fontCor="#ffffff">
                Logar
              </MButton>
            </FormInputs>
          </form>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <MButton onClick={handleClick} buttonCor="#F5F5F5" fontCor="#999999">
            Cadastrar
          </MButton>
        </div>
        {/* <img src={imgLogin} alt="Imagem no login" /> */}
      </ContainerSection>
    </>
  );
};

export default FormLogin;
