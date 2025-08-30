import  "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Products(props){
    useEffect(function(){
        console.log("Hello I am a product")
    },[]);

    return(
        <div className="products-container">
            <div className="product-card">
                <h2>{props.dataProps.title}</h2>
                <img src={"./images/"+props.dataProps.image}></img>
                <QuantityPicker/>
            </div>
        </div>
    )
}
export default Products;