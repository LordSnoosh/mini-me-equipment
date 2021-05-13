import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import * as equipsAPI from '../../utilities/equipment-api';
import * as usersService from '../../utilities/users-service';
import * as equipmentOrdersAPI from '../../utilities/equipment-orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import EquipmentOrderList from '../../components/EquipmentOrderList/EquipmentOrderList';

import { useEffect, useState } from 'react';

export default function OrderHistoryPage({ user, setUser }) {
  const [activeOrder, setActiveOrder] = useState('');
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
      const equip = await equipsAPI.getAll();

      // setMenuItems(equip);
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
      
      <EquipmentOrderList
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