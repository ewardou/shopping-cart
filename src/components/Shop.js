import React from 'react';
import ItemCard from './ItemCard';
import { info } from '../shoesInfo';
import '../style/Shop.css';
import { useState } from 'react';

export function Shop() {
    const [shoes, setShoes] = useState(info);

    async function filterArray(e) {
        const brand = e.target.textContent;
        await resetArray();
        setShoes((prev) => {
            return prev.filter((item) => item.brand === brand);
        });
    }

    async function resetArray() {
        return Promise.resolve(setShoes(info));
    }

    const array = shoes.map((item) => {
        return (
            <ItemCard
                itemID={item.itemID}
                model={item.model}
                price={item.price}
                image={item.image}
                key={item.itemID}
            />
        );
    });
    return (
        <div className="shop">
            <div>
                <aside>
                    <p>Filter by brand</p>
                    <button onClick={resetArray}>All</button>
                    <button onClick={filterArray}>Adidas</button>
                    <button onClick={filterArray}>Puma</button>
                    <button onClick={filterArray}>New Balance</button>
                    <button onClick={filterArray}>Nike</button>
                    <button onClick={filterArray}>Reebok</button>
                </aside>
            </div>
            <div>{array}</div>
        </div>
    );
}
