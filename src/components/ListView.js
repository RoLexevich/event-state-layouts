import { ShopItem } from "./ShopItem";

export const ListView = ({ items }) => {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <ShopItem item={item} key={index} />
      ))}
    </div>
  );
};
