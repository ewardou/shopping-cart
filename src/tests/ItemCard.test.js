import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCard from '../components/ItemCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('Component renders correctly', () => {
    render(
        <ItemCard
            itemID="item1"
            model="test model"
            price="10"
            image=""
            secondImage=""
        />,
        {
            wrapper: BrowserRouter,
        }
    );
    expect(screen.getByText('test model')).toBeInTheDocument();
    expect(screen.getByText(/\$10/i)).toBeInTheDocument();
});

test('Hidden class is added to image when entering the div', () => {
    render(
        <ItemCard
            itemID="item1"
            model="test model"
            price="10"
            image=""
            secondImage=""
        />,
        {
            wrapper: BrowserRouter,
        }
    );
    const image1 = screen.getByTestId('image1');
    expect(image1).not.toHaveClass('hidden');

    userEvent.hover(screen.getByTestId('container'));
});
