import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style/App.css';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    function addItemToCart(itemID) {
        if (cartItems.includes(itemID)) return;
        setCartItems((prev) => [...prev, itemID]);
        setTotalItems((prev) => prev + 1);
    }

    function removeItem(itemID) {
        setCartItems((prev) => prev.filter((item) => item !== itemID));
        setTotalItems((prev) => prev - 1);
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
                    <Cart
                        cartItems={cartItems}
                        removeItem={removeItem}
                        totalItems={totalItems}
                        setTotalItems={setTotalItems}
                    />
                </nav>
            </header>
            <div>
                <Outlet context={addItemToCart} />
            </div>
        </div>
    );
}

export default App;
