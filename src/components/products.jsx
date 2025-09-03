import  "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Products(props){
    const[totalPrice, setTotalPrice] = useState(1);

    useEffect(function(){
        console.log("Hello I am a product")
    },[]);

    function onQuantityChange(newQuantity){
        console.log("the new quantity is "+newQuantity);
        setTotalPrice(newQuantity);
    }

    return(
        <div className="products-container">
            <div className="product-card">
                <h2>{props.dataProps.title}</h2>
                <img src={"./images/"+props.dataProps.image}></img>
                <label>Price: {(props.dataProps.price).toFixed(2)}</label>
                <label>Total: {(props.dataProps.price * totalPrice).toFixed(2)}</label>
                
                <QuantityPicker onChange={onQuantityChange} />
            
            </div>
        </div>
    )
}
export default Products;