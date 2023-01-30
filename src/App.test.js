import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
    render(<App />, { wrapper: BrowserRouter });
    const linkElement = screen.getByText(/Home/i);
    const linkElement2 = screen.getByText('Shop');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
});
