import "./MenuList.css";
import MenuListItem from "../MenuListItem/MenuListItem";


//using the uniqe index of the equipment as the key, rendering each epuipment
export default function MenuList({ menuItems, handleAddToOrder }) {
  return (
    <main className="MenuList">
      {menuItems.map((item) => (
        <MenuListItem
          key={item.index}
          menuItem={item}
          handleAddToOrder={handleAddToOrder}
        />
      ))}
    </main>
  );
}
