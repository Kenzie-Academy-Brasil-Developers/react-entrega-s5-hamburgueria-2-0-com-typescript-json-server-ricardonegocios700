import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

interface Children {
  children: ReactNode;
}
interface User {
  email: string;
  password: string;
  name: string;
}
interface UserContextProvider {
  createUser: (user: User) => void;
}

const UsersContext = createContext<UserContextProvider>(
  {} as UserContextProvider
);

export const UsersProvider = ({ children }: Children) => {
  const createUser = (user: User) => {
    axios
      .post("https://kenziehamburgers.herokuapp.com/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log("Erro: ", error));
  };
  return (
    <UsersContext.Provider value={{ createUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
