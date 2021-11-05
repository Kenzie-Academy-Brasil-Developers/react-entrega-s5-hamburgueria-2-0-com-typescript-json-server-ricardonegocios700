import axios from "axios";
import { useAuth } from "../Auth/auth";
import { createContext, useContext, useState, ReactNode } from "react";

interface Children {
  children: ReactNode;
}

interface ProductData {
  name: string;
  price: string;
  description: string;
  image: string;
  userId: string;
  id: number;
}
interface CartProviderContext {
  setNewCart: (product: ProductData) => void;
  cart: ProductData[];
  addToCart: (product: ProductData) => void;
  removeToCart: (product: ProductData) => void;
}

const CartContext = createContext<CartProviderContext>(
  {} as CartProviderContext
);

export const CartsProvider = ({ children }: Children) => {
  const { config } = useAuth();
  const [cart, setCart] = useState<ProductData[]>([]);
  const [newCart, setNewCart] = useState<ProductData>({} as ProductData);
  console.log("cart: ", cart);

  //const getToCart = () => {}; //TODO axios GET

  const addToCart = (product: ProductData) => {
    //TODO adicionar pelo axios POST
    setCart([...cart, product]);
  };

  const removeToCart = (product: ProductData) => {
    axios
      .post(`https://kenziehamburgers.herokuapp.com/cart/${product.id}`, config)
      .then((resp) => {
        //TODO buscar resultado pela função getToCart
        console.log("remover do array", product.id);
      });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setNewCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
