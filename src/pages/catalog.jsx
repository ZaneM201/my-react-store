import Products from "../components/products";
import "./catalog.css"
import { useEffect, useState } from "react";
import DataService from "../dataService/data";

function Catalog(){
    const[productsGlobal, setProductsGlobal] = useState([]);
    const[categories, setCategories] = useState([]);
    const[productsToDisplay, setProductsToDisplay] = useState([]);
    useEffect(function(){
        console.log("Component Loaded");
        loadCatalog();
    },[]);

    function filter(category){
        console.log(category);
        let filteredProducts = [];
        for(let i=0; i<productsGlobal.length; i++){
            let temp = productsGlobal[i];
            if(temp.category === category){
                filteredProducts.push(temp);
            }
        }
        setProductsToDisplay(filteredProducts);
        console.log(filteredProducts);
    }

    function clearFilter(){
        setProductsToDisplay(productsGlobal);
    }

    function loadCatalog(){
        //get the products from the service
        let service = new DataService;
        let products = service.getProducts();
        console.log(products);
        setProductsGlobal(products);
        let categoriesLocal = ["smartphones", "smart tv", "computers"];
        setCategories(categoriesLocal);
        setProductsToDisplay(products);
    }

    return(
        <div className="catalog-card">
            <h2>Catalog Page</h2>
            <h3>Hello we have {productsGlobal.length} new products</h3>
            <button onClick={clearFilter} className="btn btn-info m1">All</button>
            {categories.map(catTemp => <button onClick={()=> filter(catTemp)} key={catTemp} className="btn btn-info m-1">{catTemp}</button>)}
            {productsToDisplay.map(temporal => <Products dataProps={temporal} key={temporal.id}/>)}
        </div>
    )
}
export default Catalog;