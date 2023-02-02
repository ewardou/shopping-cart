import React from 'react';
import { info } from '../shoesInfo.js';
import '../style/CartItem.css';
import { useState, useEffect } from 'react';
// import forceUp

function Quantity({ removeItem, item, setTotalItems }) {
    const [quantity, setQuantity] = useState(1);
    function increase() {
        setQuantity((prev) => prev + 1);
        setTotalItems((prev) => prev + 1);
    }
    function decrease() {
        if (quantity <= 1) return removeItem();
        setQuantity((prev) => prev - 1);
        setTotalItems((prev) => prev - 1);
    }
    useEffect(() => {
        item.quantity = quantity;
    }, [quantity]);

    return (
        <div>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export function CartItem({ itemID, removeItem, setTotalItems }) {
    const [item] = info.filter((item) => item.itemID === itemID);
    return (
        <div className="card-item">
            <img src={item.image} alt={item.model} />
            <div>
                <p>{item.model}</p>
                <p>${item.price}</p>
                <Quantity
                    removeItem={() => removeItem(itemID)}
                    item={item}
                    setTotalItems={setTotalItems}
                />
            </div>
        </div>
    );
}
