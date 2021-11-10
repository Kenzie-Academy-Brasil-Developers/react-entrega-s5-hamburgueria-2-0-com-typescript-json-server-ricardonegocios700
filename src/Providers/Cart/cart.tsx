import axios from "axios";
import { useAuth } from "../Auth/auth";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
  //setNewCart: (product: ProductData) => void;
  cart: ProductData[];
  addToCart: (product: ProductData) => void;
  removeToCart: (product: ProductData) => void;
  getToCart: () => void;
}

const CartContext = createContext<CartProviderContext>(
  {} as CartProviderContext
);

export const CartsProvider = ({ children }: Children) => {
  const { config, user } = useAuth();
  const [cart, setCart] = useState<ProductData[]>([]);

  const getToCart = () => {
    axios
      .get("https://kenziehamburgers.herokuapp.com/cart", config)
      .then((resp) => {
        resp && setCart(resp.data);
      })
      .catch((err) => {
        console.log("Erro: ", err);
      });
  };
  useEffect(() => {
    getToCart();
  });

  const addToCart = (product: ProductData) => {
    //TODO adicionar pelo axios POST
    axios
      .post(
        "https://kenziehamburgers.herokuapp.com/cart",
        {
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          userId: user.id,
        },
        config
      )
      .then((resp) => {
        getToCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeToCart = (product: ProductData) => {
    axios
      .delete(
        `https://kenziehamburgers.herokuapp.com/cart/${product.id}`,
        config
      )
      .then((resp) => {
        getToCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, getToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
