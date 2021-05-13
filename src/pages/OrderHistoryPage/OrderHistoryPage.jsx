import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import * as equipsAPI from '../../utilities/equipment-api';
import * as usersService from '../../utilities/users-service';
import * as equipmentOrdersAPI from '../../utilities/equipment-orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

import { useEffect, useState } from 'react';

export default function OrderHistoryPage({ user, setUser }) {
  const [activeOrder, setActiveOrder] = useState('');
  const [menuItems, setMenuItems] = useState([])
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const allOrders = await equipmentOrdersAPI.getAllOrders();
      setOrders(allOrders);
      setActiveOrder(allOrders[0]);
    }
    getOrders()
  }, []);

  useEffect(function() {
    async function getItems() {
      const items = await equipsAPI.getAll();

      setMenuItems(items);
      // setActiveCat(equip[0].category.name);
    }
    getItems();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await equipmentOrdersAPI.getCart();
      // setCart(cart);
    }
    getCart();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      
      <OrderList
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
        orders={orders}
      /> 
     
      <OrderDetail 
        order={activeOrder}
      /> 
  

    </main>
  );
}