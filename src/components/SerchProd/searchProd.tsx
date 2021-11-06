import { useState } from "react";
import { useProducts } from "../../Providers/Products/products";

const SearchProd = () => {
  const { getProduct, product } = useProducts();
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    getProduct(search);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Digite sua pesquisa"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default SearchProd;
