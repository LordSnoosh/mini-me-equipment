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

//state is set, and all the epuipment from the API is renderd
  useEffect(function () {
    async function getItems() {
      const apiData = await equipmentAPI.getAll();
      setMenuItems(apiData.results);
    }
    getItems();
  }, []);

  /*--- Event Handlers ---*/

  //adds the item object into the empty cart
  async function handleAddToOrder(item) {
   
    setCart([...cart, item]);
  }


  //handles the push to the DB
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
