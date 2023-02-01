import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/ItemPage.css';
import { Link } from 'react-router-dom';
import { info } from '../shoesInfo';
import { useState } from 'react';

function Gallery({ item, onClick }) {
    return (
        <div className="gallery">
            <img src={item.image} alt={item.model} onClick={onClick} />
            <img src={item.secondImage} alt={item.model} onClick={onClick} />
            <img src={item.thirdImage} alt={item.model} onClick={onClick} />
            <img src={item.fourthImage} alt={item.model} onClick={onClick} />
        </div>
    );
}

export default function ItemPage() {
    const { itemID } = useParams();
    const [item] = info.filter((item) => {
        return item.itemID === itemID;
    });
    const [image, setImage] = useState(item.image);
    function changeImage(e) {
        setImage(e.target.src);
    }

    return (
        <div className="item-page">
            <Link to="/shop">Go back</Link>
            <div>
                <img src={image} alt={item.model} />
            </div>
            <div>
                <h1>{item.model}</h1>
                <p>{`$${item.price}`}</p>
                <Gallery item={item} onClick={changeImage} />
                <p>
                    <label htmlFor="size">Size: </label>
                    <select id="size">
                        <option>7</option>
                        <option>7.5</option>
                        <option>8</option>
                        <option>8.5</option>
                        <option>9</option>
                        <option>9.5</option>
                        <option>10</option>
                        <option>10.5</option>
                        <option>11</option>
                        <option>11.5</option>
                        <option>12</option>
                        <option>12.5</option>
                    </select>
                </p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}
