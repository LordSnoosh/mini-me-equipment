import { useState, useEffect } from 'react';
import * as equipmentAPI from '../../utilities/equipment-api';
import * as equipmentOrdersAPI from '../../utilities/equipment-orders-api';
import './NewEquipmentOrderPage.css';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function NewEquipmentOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(function() {
    async function getItems() {
      
      // items will be an object returned from the api with a count and results array
      const apiData = await equipmentAPI.getAll();
      // just interested in the results array that contains the api's equip objects
      setMenuItems(apiData.results);
    }
    getItems();
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cartOrder = await equipmentOrdersAPI.getCart();
      setCart([cartOrder]);
    //   getItems();
    }
    getCart();
  }, 
  []);

  // console.log(menuItems);
  /*--- Event Handlers ---*/
  async function handleAddToOrder(index) {
    console.log(index)
    const updatedCart = await equipmentOrdersAPI.addItemToCart(index);
    setCart(updatedCart);
    console.log(cart);
  }

  async function handleChangeQty(index, newQty) {
    const updatedCart = await equipmentOrdersAPI.setItemQtyInCart(index, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await equipmentOrdersAPI.checkout(cart);
    // programmatically change client-side routes
    history.push('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo /> 
       
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
         
      </aside>
       <MenuList
        menuItems={menuItems}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      /> 
    </main>
  );
}