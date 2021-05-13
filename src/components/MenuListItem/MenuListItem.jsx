import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="cost flex-ctr-ctr">{menuItem.cost}</div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.cost.toFixed(2)}</span>
        {/* <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}> */}
          ADD
        {/* </button> */}
      </div>
    </div>
  );
}