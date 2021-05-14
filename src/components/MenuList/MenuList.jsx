import "./MenuList.css";
import MenuListItem from "../MenuListItem/MenuListItem";


export default function MenuList({ menuItems, handleAddToOrder }) {
  console.log(menuItems);

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
