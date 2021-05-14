import "./CatalogList.css";
import CatalogListItem from "../CatalogListItem/CatalogListItem";


export default function CatalogList({ catalogItems }) {
  console.log(catalogItems);

  return (
    <main className="CatalogList">
      {catalogItems.map((item) => (
        <CatalogListItem
          key={item.index}
          catalogItem={item}
          
        />
      ))}
    </main>
  );
}
