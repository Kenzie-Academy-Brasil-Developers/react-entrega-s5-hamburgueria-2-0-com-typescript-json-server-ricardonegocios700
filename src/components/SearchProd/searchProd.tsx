import { useState } from "react";
import { useProducts } from "../../Providers/Products/products";
import { TextField } from "@material-ui/core";
import MButton from "../Button/button";
import { Container } from "./styled";

const SearchProd = () => {
  const { getProduct } = useProducts();
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    getProduct(search);
  };

  return (
    <div className="toLeft">
      <Container>
        <TextField
          label="Digite sua pesquisa"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <MButton
          onClick={handleClick}
          size="large"
          buttonCor="#219653"
          fontCor="#ffffff"
        >
          Search
        </MButton>
      </Container>
    </div>
  );
};

export default SearchProd;
