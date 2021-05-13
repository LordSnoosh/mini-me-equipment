import './OrderListItem.css';

export default function OrderListItem({ order, handleSelectOrder, isSelected }) {
  return (
    <div className={`OrderListItem${isSelected ? ' selected' : ''}`} onClick={handleSelectOrder}>
      <div className="OrderId">
        <span>Order Id:{order.orderId}</span>
        <br />
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        <span>{order.price}</span>
        <span>{order.totalQty} Items</span>
      </div>
    </div>
  );
}