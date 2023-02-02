import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style/App.css';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([]);

    function addItemToCart(itemID) {
        if (cartItems.includes(itemID)) return;
        setCartItems((prev) => [...prev, itemID]);
    }

    const activeStyle = {
        borderBottom: 'solid 2px turquoise',
    };

    return (
        <div className="App">
            <header>
                <h1>SneakerShop</h1>
                <nav>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Shop
                    </NavLink>
                    <Cart cartItems={cartItems} />
                </nav>
            </header>
            <div>
                <Outlet context={addItemToCart} />
            </div>
        </div>
    );
}

export default App;
