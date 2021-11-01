import { createContext, useContext, useState, ReactNode } from "react";

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
  config: object;
}

const ProductsContext = createContext<ProductsProviderContext>(
  {} as ProductsProviderContext
);

export const ProductsProvider = ({ children }: Children) => {
  const { config } = useAuth();

  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);

  /*  const getProducts = () => {
    axios
      .get("https://kenziehamburgers.herokuapp.com/products", config)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Erro: ", error));
  };
*/
  return (
    <ProductsContext.Provider value={{ config, products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
