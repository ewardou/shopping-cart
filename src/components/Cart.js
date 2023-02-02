import React from 'react';
import cart from '../images/icons/cart.svg';
import '../style/Cart.css';
import { CartItem } from './CartItem';
import { Total } from './Total';

export default function Cart({
    cartItems,
    removeItem,
    totalItems,
    setTotalItems,
}) {
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

    const array = cartItems.map((item) => (
        <CartItem
            itemID={item}
            key={item}
            removeItem={removeItem}
            setTotalItems={setTotalItems}
        />
    ));
    return (
        <span className="cart" onClick={showCart}>
            <span>{cartItems.length}</span>
            <img src={cart} alt={'Shopping cart'} />
            <div>
                <button onClick={closeCart}>x</button>
                <div className="cart-items-container">
                    {cartItems.length !== 0 ? array : 'No items added yet'}
                </div>
                <Total cartItems={cartItems} totalItems={totalItems} />
                <button onClick={checkout}>Proceed to checkout</button>
            </div>
        </span>
    );
}
