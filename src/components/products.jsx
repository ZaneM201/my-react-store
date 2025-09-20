import GlobalContext from "../state/globalContext";
import  "./products.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";

function Products(props){
    const[totalPrice, setTotalPrice] = useState(1);

    const context = useContext(GlobalContext);

    useEffect(function(){
        console.log("Hello I am a product")
    },[]);

    function onQuantityChange(newQuantity){
        console.log("the new quantity is "+newQuantity);
        setTotalPrice(newQuantity);
    }

    function add2Cart() {
        console.log("Button Clicked!");
        let prod = {...props.dataProps, quantity: totalPrice};
        context.addProductToCart(prod);
    }

    return(
        <div className="products-container">
            <div className="product-card">
                <h2>{props.dataProps.title}</h2>
                <img src={"./images/"+props.dataProps.image}></img>
                <label>Price: {(props.dataProps.price).toFixed(2)}</label>
                <label>Total: {(props.dataProps.price * totalPrice).toFixed(2)}</label>
                
                <QuantityPicker onChange={onQuantityChange} />

                <button onClick={add2Cart} className="btn btn-add">Add to Cart</button>
            </div>
        </div>
    )
}
export default Products;