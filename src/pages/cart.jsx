import { useContext } from 'react';
import './cart.css';
import GlobalContext from '../state/globalContext';


function Cart(){

    const context = useContext(GlobalContext);

    return(
        <div className='cart'>
            <h1>Ready to Complete your order?</h1>

            <div className="parent">

                <ul className="list">
                    {context.cart.map(prod => 
                        <li className='prod-cart'>
                            <img src={"/images/" + prod.image} />
                            <h4>{prod.title}</h4>
                            <label className='price'>${prod.price}</label>
                            <label>Qty: {prod.quantity}</label>
                            <label className='price'>Total: ${prod.price * prod.quantity}</label>
                            <button className='btn btn-remove'>Remove</button>

                        </li>)}
                </ul>

                <div className="side-menu">
                    <h3>Total</h3>
                    <h2>$9,999.99</h2>

                    <button className='btn btn-pay'>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;