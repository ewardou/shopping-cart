import React from 'react';
import { Link } from 'react-router-dom';

export function Shop() {
    return (
        <div>
            <h1>Hello from shop</h1>
            <Link to="item1">Item 1</Link>
            <br />
            <Link to="item2">Item 2</Link>
            <br />
            <Link to="item3">Item 3</Link>
        </div>
    );
}
