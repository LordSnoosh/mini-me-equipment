import { useState, useEffect } from 'react';
import * as equipmentAPI from '../../utilities/equipment-api';
import '../NewEquipmentOrderPage/NewEquipmentOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CatalogList from '../../components/CatalogList/CatalogList';

export default function EquipmentCatalog({ user, setUser }) {
  const [catalogItems, setCatalogItems] = useState([]);


  useEffect(function() {
    async function getItems() {
      const items = await equipmentAPI.getAll();
  
      setCatalogItems([items]);
    }
    getItems();

    // Load cart (a cart is the unpaid order for the logged in us
  }, []);
  // console.log(catalogItems);
  



  return (
    <main className="NewOrderPage">
      <aside>
        <Logo /> 
         
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
      </aside>
       <CatalogList
        catalogItems={catalogItems}
      />
     
    </main>
  );
}