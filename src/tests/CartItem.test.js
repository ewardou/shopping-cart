import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartItem } from '../components/CartItem';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('Renders component correctly', () => {
    jest.mock('../shoesInfo', () => {
        return [
            {
                itemID: 'item1',
                price: '50',
                quantity: '1',
                model: 'test model',
                image: '',
            },
        ];
    });

    const removeItem = jest.fn();
    const setTotalItems = jest.fn();
    const { container } = render(
        <CartItem
            itemID={'item1'}
            removeItem={removeItem}
            setTotalItems={setTotalItems}
        />
    );
    expect(container).toMatchSnapshot();
});

test("Pressing the '+' button increases the quantity", () => {
    jest.mock('../shoesInfo', () => {
        return [
            {
                itemID: 'item1',
                price: '50',
                quantity: '1',
                model: 'test model',
                image: '',
            },
        ];
    });

    const removeItem = jest.fn();
    const setTotalItems = jest.fn();
    render(
        <CartItem
            itemID={'item1'}
            removeItem={removeItem}
            setTotalItems={setTotalItems}
        />
    );
    const counter = screen.getByText('1');
    const plusButton = screen.getByText('+');

    userEvent.click(plusButton);
    userEvent.click(plusButton);
    expect(counter.innerHTML).toBe('3');
});

test('Functions passed in props are called', () => {
    jest.mock('../shoesInfo', () => {
        return [
            {
                itemID: 'item1',
                price: '50',
                quantity: '1',
                model: 'test model',
                image: '',
            },
        ];
    });

    const removeItem = jest.fn();
    const setTotalItems = jest.fn();
    render(
        <CartItem
            itemID={'item1'}
            removeItem={removeItem}
            setTotalItems={setTotalItems}
        />
    );
    const minusButton = screen.getByText('-');
    const plusButton = screen.getByText('+');

    userEvent.click(plusButton);
    userEvent.click(minusButton);
    userEvent.click(minusButton);

    expect(setTotalItems).toHaveBeenCalled();
    expect(removeItem).toHaveBeenCalled();
});
