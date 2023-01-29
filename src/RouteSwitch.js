import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import Item from './components/Item';
import App from './App';

export const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/:itemID" element={<Item />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
