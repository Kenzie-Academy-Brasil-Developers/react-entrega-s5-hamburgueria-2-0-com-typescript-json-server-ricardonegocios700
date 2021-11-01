//import { useProducts } from "../../Providers/Products/products";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/Auth/auth";

const Products = () => {
  //const { products } = useProducts();
  //console.log(products);
  const history = useHistory();
  const { authorized } = useAuth();
  if (!authorized) {
    history.push("/");
  }
  return (
    <>
      <h1>Páginas products</h1>
    </>
  );
};

export default Products;
