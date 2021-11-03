import jwtDecode from "jwt-decode";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProviderData {
  children: ReactNode;
}
interface UserLogin {
  email: string;
  password: string;
}
interface AuthProviderContext {
  signIn: (userData: UserLogin) => void;
  authorized: boolean;
  config: object;
  user: object;
  //authToken: string;
  //setAuthToken: () => void;
}
interface MyToken {
  email: string;
  sub: string;
  iat: number;
  exp: number;
}

interface AtualUser {
  id: number;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthProviderContext>(
  {} as AuthProviderContext
);

export const AuthProvider = ({ children }: AuthProviderData) => {
  const history = useHistory();

  //get token to local
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || "{}"
  );

  const [authorized, setAuthorized] = useState<boolean>(false);
  const [access, setAccess] = useState<string>("");
  const [config, setConfig] = useState<object>({});
  const [user, setUser] = useState<AtualUser>({} as AtualUser);

  useEffect(() => {
    setConfig({
      headers: { Authorization: `Bearer ${access}` },
    });
  }, [access]);

  //login and set token to local
  const signIn = (userData: UserLogin) => {
    axios
      .post("https://kenziehamburgers.herokuapp.com/login", userData)
      .then((resp) => {
        const { accessToken } = resp.data;
        setAuthToken(accessToken);
        localStorage.setItem(
          "@HaburgueriaQ2:accessToken",
          JSON.stringify(accessToken)
        );
        setAccess(accessToken);
        setAuthorized(true);
        history.push("/products");
      })
      .catch((err) => console.log(err));
  };
  const getUsers = (userId: string) => {
    axios
      .get(`https://kenziehamburgers.herokuapp.com/users/${userId}`)
      .then((resp) => {
        /*
          console.log(typeof resp.data.id);
          const { name, email, id } = resp.data;
          setUser({ name, email, id });
        */
        setUser({
          id: resp.data.id,
          name: resp.data.name,
          email: resp.data.email,
        });
      })
      .catch((err) => console.log(userId));
  };
  useEffect(() => {
    const myLocalStorage =
      localStorage.getItem("@HaburgueriaQ2:accessToken") || "{}";
    const token = JSON.parse(myLocalStorage);
    console.log(token);
    /*if (token) {
      const decoded = jwtDecode<MyToken>(token);
      setConfig({
        headers: { Authorization: `Bearer ${token}` },
      });
      getUsers(decoded?.sub);
    }*/
  }, [access]);

  return (
    <AuthContext.Provider value={{ signIn, authorized, config, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
