import React from 'react';
import { render } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';


describe(Settings, () => {
    it('link should be rendered', () => {
        const { getByRole } = render(<Settings />, { wrapper: MemoryRouter });
        const homeLink = getByRole('link');
        expect(homeLink).toBeInTheDocument();
    });

    it('link should send back the user to the home page', () => {
        const { getByRole } = render(<Settings />, { wrapper: MemoryRouter });
        const homeLink = getByRole('link');
         expect(homeLink).toHaveAttribute('href', '/');
    });

    it('CH nationality filter button should be rendered', () => {
        const { getByText } = render(<Settings />, { wrapper: MemoryRouter });
        const buttonCH = getByText('CH');
         expect(buttonCH).toBeInTheDocument();
    });
    it('ES nationality filter button should be rendered', () => {
        const { getByText } = render(<Settings />, { wrapper: MemoryRouter });
        const buttonES = getByText('ES');
        expect(buttonES).toBeInTheDocument();
    });
    it('FR nationality filter button should be rendered', () => {
        const { getByText } = render(<Settings />, { wrapper: MemoryRouter });
        const buttonFR = getByText('FR');
        expect(buttonFR).toBeInTheDocument();
    });
    it('GB nationality filter button should be rendered', () => {
        const { getByText } = render(<Settings />, { wrapper: MemoryRouter });
        const buttonGB = getByText('GB');
        expect(buttonGB).toBeInTheDocument();
    });
});
