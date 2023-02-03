import React from 'react';
import { info } from '../shoesInfo';
import { useState, useEffect } from 'react';

export function Total({ cartItems, totalItems }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const itemObj = [];
        for (let i = 0; i < cartItems.length; i++) {
            for (let j = 0; j < info.length; j++) {
                if (cartItems[i] === info[j].itemID) {
                    itemObj.push(info[j]);
                }
            }
        }
        setTotal(
            itemObj.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
        );
    }, [cartItems, totalItems]);
    return (
        <p>{`Total (${totalItems} items): $${total ? total.toFixed(2) : 0}`}</p>
    );
}
