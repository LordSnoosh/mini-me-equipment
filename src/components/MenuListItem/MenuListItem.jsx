import "./MenuListItem.css";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="name">
        <div className="item-container">
          <p>{menuItem.index}</p>
          <button
            className="btn-sm"
            onClick={() => handleAddToOrder(menuItem)}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="buy">
        <span>$$$$$</span>
      </div>
    </div>
  );
}
