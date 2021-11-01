import { ReactNode } from "react";
import { AuthProvider } from "./Auth/auth";
import { ProductsProvider } from "./Products/products";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
