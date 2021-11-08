import { useProducts } from "../../Providers/Products/products";
import { useCart } from "../../Providers/Cart/cart";
import { useAuth } from "../../Providers/Auth/auth";
import { useHistory } from "react-router";
import { Modal, Box } from "@material-ui/core";

import SearchProd from "../../components/SearchProd/searchProd";
import List from "../../components/List/list";
import { Container } from "./styled";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #007aff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

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
  const { products, product } = useProducts();
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
  const [openCart, setOpenCart] = useState<boolean>(false);
  const handleCloseCart = () => setOpenCart(false);
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const handleCloseSearch = () => setOpenSearch(false);
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  return (
    <>
      <button onClick={handleOpenCart}>Cart</button>
      <button onClick={handleClickLogout}>Logout</button>
      <SearchProd handleOpenSearch={handleOpenSearch} />
      <h1>Products</h1>
      <Container>
        {products.map((item) => (
          <List
            item={item}
            handleClickAdd={handleClickAdd}
            handleClickRemove={handleClickRemove}
            display="add"
          />
        ))}
      </Container>
      <Modal
        open={openCart}
        onClose={handleCloseCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Cart</h1>
          <Container>
            {cart.map((item) => (
              <List
                item={item}
                handleClickAdd={handleClickAdd}
                handleClickRemove={handleClickRemove}
                display="remove"
              />
            ))}
          </Container>
        </Box>
      </Modal>
      <Modal
        open={openSearch}
        onClose={handleCloseSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Search</h1>
          <Container>
            {product.map((item) => (
              <List
                item={item}
                handleClickAdd={handleClickAdd}
                handleClickRemove={handleClickRemove}
                display="add"
              />
            ))}
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default Products;
