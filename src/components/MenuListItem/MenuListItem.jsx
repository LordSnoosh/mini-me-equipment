import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="name">{menuItem.results.map(result => 
      <div>
      <p>{result.name}</p>
      <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
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