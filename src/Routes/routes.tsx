import { Switch, Route } from "react-router-dom";
//import Pages
import Login from "../pages/Login/login";
import Products from "../pages/Products/products";
import CadUser from "../pages/CadUser/cadUser";

const Routes = () => {
  return (
    <>
      <h1>Rota</h1>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/cad_user">
          <CadUser />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
