import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import fast from '../images/shoes/NB5740.webp';
import { info } from '../shoesInfo';

export function Shop() {
    return (
        <div>
            <h1>Hello from shop</h1>
            <ItemCard itemID={'item4'} model={'test model'} image={fast} />
        </div>
    );
}
