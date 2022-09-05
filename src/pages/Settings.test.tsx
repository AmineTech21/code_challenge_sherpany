import React from 'react';
import { render } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';
import { getUsers } from '../api/getUsersApi';

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
    it('Reset nationality filter button should be rendered', () => {
        const { getByText } = render(<Settings />, { wrapper: MemoryRouter });
        const buttonReset = getByText('Reset nationalities');
        expect(buttonReset).toBeInTheDocument();
    });

    it('The user should have a nat "FR"', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].nat).toBe("FR");
    });
    it('The user should have a nat "ES"', async () => {
        const users = await getUsers(1, 'ES');
        expect(users[0].nat).toBe("ES");
    });
    it('The user should have a nat "CH"', async () => {
        const users = await getUsers(1, 'CH');
        expect(users[0].nat).toBe("CH");
    });
    
    it('The user should have a nat "GB"', async () => {
        const users = await getUsers(1, 'GB');
        expect(users[0].nat).toBe("GB");
    });
});
