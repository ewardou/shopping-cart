import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ItemCard.css';

export default function ItemCard(props) {
    function modifyImage(e) {
        const div = e.target.childNodes[0];
        div.childNodes[0].classList.toggle('hidden');
        div.childNodes[1].classList.toggle('hidden');
    }

    return (
        <div
            className="card"
            onMouseEnter={modifyImage}
            onMouseLeave={modifyImage}
        >
            <Link to={`${props.itemID}`}>
                <div>
                    <img src={props.image} alt={props.model} />
                    <img
                        src={props.secondImage}
                        alt={props.model}
                        className="secondImage hidden"
                    />
                </div>
                <p>{props.model}</p>
                <p>{`Price: $${props.price} `}</p>
            </Link>
        </div>
    );
}
