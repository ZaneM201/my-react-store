import Products from "../components/products";
import "./catalog.css"
import { useEffect, useState } from "react";
import DataService from "../dataService/data";

function Catalog(){
    const[productsGlobal, setProductsGlobal] = useState([]);
    useEffect(function(){
        console.log("Component Loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        //get the products from the service
        let service = new DataService;
        let products = service.getProducts();
        console.log(products);
        setProductsGlobal(products);
    }

    return(
        <div className="catalog">
            <h2>Catalog Page</h2>
            <h3>Hello we have {productsGlobal.length} new products</h3>
            {productsGlobal.map(temporal => <Products dataProps={temporal} key={temporal.id}/>)}
        </div>
    )
}
export default Catalog;