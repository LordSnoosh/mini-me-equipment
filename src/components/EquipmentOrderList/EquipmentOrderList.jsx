import './EquipmentOrderList.css';
import EquipmentOrderListItem from '../EquipmentOrderListItem/EquipmentOrderListItem'
export default function EquipmentOrderList({ activeOrder, setActiveOrder, orders }) {
  const orderItems = orders.map(ord =>
    <EquipmentOrderListItem
      order={ord}
      isSelected={ord === activeOrder}
    //   handleSelectOrder={handleSelectOrder}
      key={ord._id}
    />
  );
  return (
    <main className="OrderList">
      {orderItems.length ? orderItems : <span className="noOrders"> No Order History</span>}
    </main>
  );
}