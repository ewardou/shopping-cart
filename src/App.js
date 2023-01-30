import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style/App.css';

function App() {
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
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
