import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
    const activeStyle = {
        color: 'red',
    };

    return (
        <div className="App">
            <h1>Hello from App</h1>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
                <br />
                <NavLink
                    to="/shop"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Shop
                </NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
