import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="name">
        
        {menuItem.results.map(result => 
      <div className="item-container">
      <p>{result.index}</p>
        <button className="btn-sm" onClick={() => handleAddToOrder(result.index)}>
          ADD
        </button>
      </div>
      )}
      
      </div>
      <div className="buy">
        {/* <span>${menuItem.cost}</span> */}
        
      </div>
    </div>
  );
}