import "./OrderDetail.css";
import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  // React will render nothing if a component returns null
  if (!order) return null;

  // const lineItems = order.map((item) => {
    // console.log(item)
    // <LineItem
    //   lineItem={item}
    //   // isPaid={order.isPaid}
    //   // handleChangeQty={handleChangeQty}
    //   // key={item.index}
    // />
  // }
  // );

  return (
    <>
      <ul>
        <>
          <h2>Order</h2>
          {console.log(order)}
          {order.map((item) => {
              // item.map((actualItem) => {
                return <li>{item.index}</li>;
              // })
          })}
        </>
        <button className="btn-sm" onClick={handleCheckout}>
          SEND ORDER
        </button>
      </ul>
      
    </>
  );
}
