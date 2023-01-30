import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import fastIcon from '../images/icons/fast.svg';
import bestPriceIcon from '../images/icons/best-price.svg';
import newIcon from '../images/icons/new.svg';

function Quality({ title, url }) {
    return (
        <div className="quality">
            <img src={url} alt="" />
            <p>{title}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export function Home() {
    return (
        <div className="home">
            <div className="cover-background">
                <div className="cover-content">
                    <h1>Sneakers straight to your doorstep</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta odit possimus, aspernatur porro sint mollitia est
                        nostrum repudiandae esse officiis.
                    </p>
                    <Link to={'/shop'}>SHOP NOW</Link>
                </div>
            </div>
            <h1>You'll love shopping with us!</h1>
            <div className="qualities">
                <Quality title="Fast shipping" url={fastIcon} />
                <Quality title="Best prices" url={bestPriceIcon} />
                <Quality
                    title="Original models and new releases"
                    url={newIcon}
                />
            </div>
        </div>
    );
}
