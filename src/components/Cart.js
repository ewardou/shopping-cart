import React from 'react';
import cart from '../images/icons/cart.svg';
import '../style/Cart.css';
import { CartItem } from './CartItem';
import { Total } from './Total';
import { useState } from 'react';

export default function Cart({
    cartItems,
    removeItem,
    totalItems,
    setTotalItems,
}) {
    const [visible, setVisible] = useState('');

    function showCart() {
        document.body.setAttribute('style', 'overflow:hidden');
        setVisible('visible');
    }

    function closeCart() {
        document.body.removeAttribute('style');
        setVisible('');
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
        <span className="cart">
            <span className="cart-icon" onClick={showCart}>
                <span>{cartItems.length}</span>
                <img src={cart} alt={'Shopping cart'} />
            </span>
            <div className={visible}>
                <button onClick={closeCart}>x</button>
                <div className="cart-items-container">
                    {cartItems.length !== 0 ? array : 'No items added yet'}
                </div>
                <Total cartItems={cartItems} totalItems={totalItems} />
                <button onClick={checkout}>Proceed to checkout</button>
            </div>
            <div
                className={`cart-background ${visible}`}
                onClick={closeCart}
            ></div>
        </span>
    );
}
