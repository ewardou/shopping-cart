import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage() {
    const { itemID } = useParams();
    return <h1>{itemID} information</h1>;
}
