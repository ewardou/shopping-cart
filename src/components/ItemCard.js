import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard(props) {
    return (
        <div>
            <img src={props.image} alt={props.model} />
            <p>{props.model}</p>
            <p>{`Price: $${props.price} `}</p>
            <Link to={`${props.itemID}`}>Buy</Link>
        </div>
    );
}
