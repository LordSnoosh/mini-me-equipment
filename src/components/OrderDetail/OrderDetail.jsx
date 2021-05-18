import "./OrderDetail.css";

export default function OrderDetail({ order, handleCheckout }) {
  if (!order) return null;

  return (
    <>
      
      <ul>
        <>
        <h2>Order</h2>
          {order.map((item) => {
            return (
              <li>
                {item[0].name} || ({item[0].url})
              </li>
            );
          })}
        </>
        <button className="btn-sm" onClick={handleCheckout}>
          SEND ORDER
        </button>
      </ul>
    </>
  );
}
