import React from 'react';
import cart from '../images/icons/cart.svg';
import '../style/Cart.css';

export default function Cart({ cartItems }) {
    function showCart(e) {
        console.log(e.target.childNodes);
        const [, , div] = e.target.childNodes;
        div.classList.toggle('visible');
    }

    function closeCart(e) {
        const div = e.target.parentNode;
        div.classList.toggle('visible');
    }

    function checkout() {
        alert('Thank you for your purchase :)');
    }

    const array = cartItems.map((item) => <p>{item}</p>);
    return (
        <span className="cart" onClick={showCart}>
            <span>0</span>
            <img src={cart} alt={'Shopping cart'} />
            <div>
                <button onClick={closeCart}>x</button>
                <div>
                    {cartItems.length !== 0 ? array : 'No items added yet'}
                </div>
                <button onClick={checkout}>Proceed to checkout</button>
            </div>
        </span>
    );
}
