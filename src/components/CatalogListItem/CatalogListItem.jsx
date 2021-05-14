import './CatalogListItem.css';

export default function CatalogListItem({ catalogItem }) {
  return (
    <div className="CatalogListItem">
      <div className="catalog-container">
        
        {catalogItem.results.map(result => 
      <div className="item-container">
      <p>{result.name}</p>
      {/* {result.url} */}
        {/* <button className="btn-sm" onClick={() => handleAddToOrder(result.index)}>
          ADD
        </button> */}
      </div>
      )}
      
      </div>
     
    </div>
  );
}