import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../components/Home';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('Cover section renders correctly', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(
        screen.getByText(/Sneakers straight to your doorstep/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/shop now/i)).toBeInTheDocument();
});

test('Cards section renders correctly', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByText(/fast shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/best prices/i)).toBeInTheDocument();
});
