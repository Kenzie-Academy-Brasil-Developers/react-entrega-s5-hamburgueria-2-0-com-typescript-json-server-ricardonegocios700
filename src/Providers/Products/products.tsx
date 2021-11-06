import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import axios from "axios";
import { useAuth } from "../Auth/auth";

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

interface ProductsProviderContext {
  products: ProductData[];
  product: ProductData;
  config: object;
  getProducts: () => void;
  getProduct: (name: string) => void;
}

const ProductsContext = createContext<ProductsProviderContext>(
  {} as ProductsProviderContext
);

export const ProductsProvider = ({ children }: Children) => {
  const { config } = useAuth();

  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [product, setProduct] = useState<ProductData>({} as ProductData);

  const getProducts = () => {
    axios
      .get("https://kenziehamburgers.herokuapp.com/products", config)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Erro: ", error));
  };

  const getProduct = (name: any) => {
    axios
      .get(
        `https://kenziehamburgers.herokuapp.com/products?name=${name}`,
        config
      )
      .then((response) => setProduct(response.data[0]))
      .catch((error) => console.log("Erro: ", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ config, products, product, getProducts, getProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
