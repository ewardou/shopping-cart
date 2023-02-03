import React from 'react';
import { render, screen } from '@testing-library/react';
import { Total } from '../components/Total';
import '@testing-library/jest-dom';

test("Total component renders when there aren't items added to cart", () => {
    const cartItems = [];
    const totalItems = 0;

    render(<Total cartItems={cartItems} totalItems={totalItems} />);
    expect(screen.getByText(/total \(0 items\): \$0/i)).toBeInTheDocument();
});

test('The total value is processed correctly', () => {
    jest.mock('../shoesInfo', () => {
        return [
            { itemID: 'item1', price: '40', quantity: '2' },
            { itemID: 'item2', price: '100', quantity: '1' },
        ];
    });

    const cartItems = ['item1'];
    const totalItems = 2;
    render(<Total cartItems={cartItems} totalItems={totalItems} />);
    setTimeout(() => {
        expect(screen.getByText(/180.00/i)).toBeInTheDocument();
    }, 0);
});
