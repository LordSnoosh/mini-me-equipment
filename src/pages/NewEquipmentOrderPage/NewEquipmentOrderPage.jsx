import { useState, useEffect } from "react";
import * as equipmentAPI from "../../utilities/equipment-api";
import * as equipmentOrdersAPI from "../../utilities/equipment-orders-api";
import "./NewEquipmentOrderPage.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import MenuList from "../../components/MenuList/MenuList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function NewEquipmentOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(function () {
    async function getItems() {
      const apiData = await equipmentAPI.getAll();
      setMenuItems(apiData.results);
    }
    getItems();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(item) {
    const itemFromMenu = menuItems.filter(
      (menuItem) => menuItem.index === item
    );
    setCart([...cart, itemFromMenu]);
  }

  async function handleCheckout() {
    await equipmentOrdersAPI.checkout(cart);
    history.push("/orders");
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <Link to="/orders" className="button btn-sm">
          PREVIOUS ORDERS
        </Link>
      </aside>
      <MenuList menuItems={menuItems} handleAddToOrder={handleAddToOrder} />
      <OrderDetail order={cart} handleCheckout={handleCheckout} />
    </main>
  );
}
