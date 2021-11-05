import { useProducts } from "../../Providers/Products/products";
import { useCart } from "../../Providers/Cart/cart";

interface ProductData {
  name: string;
  price: string;
  description: string;
  image: string;
  userId: string;
  id: number;
}
const Products = () => {
  const { products } = useProducts();
  const { addToCart, removeToCart } = useCart();

  const handleClickAdd = (item: ProductData) => {
    addToCart(item);
  };

  const handleClickRemove = (item: ProductData) => {
    removeToCart(item);
  };

  return (
    <>
      <h1>Páginas products</h1>
      {products.map((item) => (
        <div key={item.id}>
          {item.image && <img src={item.image} alt={item.name} />}
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{item.price}</div>
          <button className="add" onClick={() => handleClickAdd(item)}>
            Adicionar
          </button>
          <button className="add" onClick={() => handleClickRemove(item)}>
            RemoveCart
          </button>
        </div>
      ))}
    </>
  );
};

export default Products;
