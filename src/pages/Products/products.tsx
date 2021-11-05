import { useProducts } from "../../Providers/Products/products";
import { useCart } from "../../Providers/Cart/cart";
import { useAuth } from "../../Providers/Auth/auth";
import { useHistory } from "react-router";
import List from "../../components/List/list";

interface ProductData {
  name: string;
  price: string;
  description: string;
  image: string;
  userId: string;
  id: number;
}
const Products = () => {
  const history = useHistory();
  const { setAuthorized, authorized } = useAuth();
  const { products } = useProducts();
  const { cart, addToCart, removeToCart } = useCart();

  const handleClickAdd = (item: ProductData) => {
    addToCart(item);
  };

  const handleClickRemove = (item: ProductData) => {
    removeToCart(item);
  };

  const handleClickLogout = () => {
    //localStorage.clear();
    setAuthorized(false);
    history.push("/");
  };

  if (!authorized) {
    history.push("/");
  }

  return (
    <>
      <button onClick={handleClickLogout}>Logout</button>
      <h1>Products</h1>
      {products.map((item) => (
        <List
          item={item}
          handleClickAdd={handleClickAdd}
          handleClickRemove={handleClickRemove}
          display="add"
        />
      ))}
      <h1>Cart</h1>
      {cart.map((item) => (
        <List
          item={item}
          handleClickAdd={handleClickAdd}
          handleClickRemove={handleClickRemove}
          display="remove"
        />
      ))}
    </>
  );
};

export default Products;
