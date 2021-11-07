import { ReactNode } from "react";
import { AuthProvider } from "./Auth/auth";
import { ProductsProvider } from "./Products/products";
import { CartsProvider } from "./Cart/cart";
import { UsersProvider } from "./Users/users";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartsProvider>
          <UsersProvider>{children}</UsersProvider>
        </CartsProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
