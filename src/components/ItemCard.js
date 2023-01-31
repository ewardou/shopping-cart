import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ItemCard.css';

export default function ItemCard(props) {
    return (
        <div className="card">
            <Link to={`${props.itemID}`}>
                <img src={props.image} alt={props.model} />
                <p>{props.model}</p>
                <p>{`Price: $${props.price} `}</p>
            </Link>
        </div>
    );
}
