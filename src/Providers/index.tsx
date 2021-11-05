import { ReactNode } from "react";
import { AuthProvider } from "./Auth/auth";
import { ProductsProvider } from "./Products/products";
import { CartsProvider } from "./Cart/cart";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartsProvider>{children}</CartsProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
