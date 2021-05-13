import './EquipmentOrderListItem.css';

export default function EquipmentOrderListItem({ order, handleSelectOrder, isSelected }) {
  return (
    <div className={`OrderListItem${isSelected ? ' selected' : ''}`} onClick={handleSelectOrder}>
      <div className="OrderId">
        <span>Order Id:{order.orderId}</span>
        <br />
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        <span>{order.cost}</span>
        <span>{order.totalQty} Items</span>
      </div>
    </div>
  );
}