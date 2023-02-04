import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import ItemPage from './components/ItemPage';
import App from './App';

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename="/shopping-cart">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/:itemID" element={<ItemPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
