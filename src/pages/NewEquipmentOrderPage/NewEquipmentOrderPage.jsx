import { useState, useEffect, useRef } from 'react';
import * as equipmentAPI from '../../utilities/equipment-api';
import * as equipmentOrdersAPI from '../../utilities/equipment-orders-api';
import './NewEquipmentOrderPage.css';
import { Link, useHistory } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
// import MenuList from '../../components/MenuList/MenuList';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewEquipmentOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  // const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();

  useEffect(function() {
    async function getItems() {
      const items = await equipmentAPI.getAll();
      // categoriesRef.current = items.reduce((cats, item) => {
      //   const cat = item.category.name;
      //   return cats.includes(cat) ? cats : [...cats, cat];
      // }, []);
      setMenuItems(items);
      // setActiveCat(items[0].category.name);
    }
    getItems();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await equipmentOrdersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await equipmentOrdersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await equipmentOrdersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await equipmentOrdersAPI.checkout();
    // programmatically change client-side routes
    history.push('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        {/* <Logo /> */}
        {/* <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        /> */}
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      {/* <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      /> */}
    </main>
  );
}