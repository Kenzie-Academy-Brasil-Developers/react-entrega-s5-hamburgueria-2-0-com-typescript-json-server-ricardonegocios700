interface ProductData {
  name: string;
  price: string;
  description: string;
  image: string;
  userId: string;
  id: number;
}
interface ListProps {
  item: ProductData;
  handleClickAdd: (item: ProductData) => void;
  handleClickRemove: (item: ProductData) => void;
  display: string;
}

const List = ({
  display,
  item,
  handleClickRemove,
  handleClickAdd,
}: ListProps) => {
  return (
    <div key={item.id}>
      {item.image && <img src={item.image} alt={item.name} />}
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      {display === "add" && (
        <button className="add" onClick={() => handleClickAdd(item)}>
          Adicionar
        </button>
      )}
      {display === "remove" && (
        <button className="remove" onClick={() => handleClickRemove(item)}>
          RemoveCart
        </button>
      )}
    </div>
  );
};

export default List;
