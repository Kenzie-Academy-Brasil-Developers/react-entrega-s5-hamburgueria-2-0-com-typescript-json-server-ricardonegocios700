import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { useUsers } from "../../Providers/Users/users";
import MButton from "../Button/button";
import { ContainerSection, FormInputs } from "./styled";

interface User {
  email: string;
  password: string;
  name: string;
}
const FormCadUser = () => {
  const history = useHistory();
  const { createUser } = useUsers();
  const formSchema = yup.object().shape({
    name: yup.string().required("Ops, esqueceu do nome"),
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
  } = useForm<User>({ resolver: yupResolver(formSchema) });

  const onSubmit = (date: User) => {
    createUser(date);
    history.push("/");
  };
  return (
    <ContainerSection>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formTop">
            <h3>Cadastrar</h3>
            <span className="spamClick" onClick={() => history.push("/")}>
              Retornar para o login
            </span>
          </div>
          <FormInputs>
            <TextField
              label="Nome"
              variant="outlined"
              size="small"
              {...register("name")}
            />
            {errors.name?.message}
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
            {errors.email?.message}
            <MButton type="submit" buttonCor="#F5F5F5" fontCor="#999999">
              Cadastrar
            </MButton>
          </FormInputs>
        </form>
      </div>
    </ContainerSection>
  );
};

export default FormCadUser;
