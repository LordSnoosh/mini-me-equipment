export default function ItemResult({ resultItem }) {
    return (
      <div className="ItemResult">
        <div className="name">{resultItem.results.map(result => 
        <div>
        <p>{result.name}</p>
          </div>
        )}
        </div>
      </div>
    );
  }