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
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <button onClick={handleOpen}>Abrir modal</button>
      <button onClick={handleClickLogout}>Logout</button>
      <SearchProd />
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
        open={open}
        onClose={handleClose}
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
    </>
  );
};

export default Products;
