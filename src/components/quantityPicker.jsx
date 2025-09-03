// here is the imports
import "./quantityPicker.css"
import { useState } from "react";

// here goes the logic
function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);
    // quantity = 5;   this is wrong
    // setQuantity(5);  this is right
    function increase(){
        setQuantity(quantity + 1);
        props.onChange(quantity + 1);

    }

    function decrease(){
        if(quantity > 1){
            setQuantity(quantity - 1);
            props.onChange(quantity - 1);
        }
    }
    // here goes the return
    return(
        <div className="quantity-picker">
            <button onClick={decrease} disabled={quantity===1}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}
// here goes the export
export default QuantityPicker;