import "./OrderDetail.css";

export default function OrderDetail({ order, handleCheckout }) {
  if (!order) return null;

  return (
    <>
      //currently, the equipment from the menu, is compiled into seprate arrays, instead of a single array
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
