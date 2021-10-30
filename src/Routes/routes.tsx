import { Switch, Route } from "react-router-dom";
//import Pages
import Login from "../pages/Login/login";
import Products from "../pages/Products/products";

const Routes = () => {
  return (
    <>
      <h1>Rota</h1>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
