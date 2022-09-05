import React from 'react';
import { render } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Home from './Home';
import HomeDescription from '../components/HomeDescription';
import SearchBar from '../components/SearchBar';

describe(Home, () => {
    it('link should be rendered', () => {
        const { getByRole } = render(<Home />, { wrapper: MemoryRouter });
        const settingsLink = getByRole('link');
        expect(settingsLink).toBeInTheDocument();
    });

    it('link should send the user to the settings page', () => {
        const { getByRole } = render(<Home />, { wrapper: MemoryRouter });
        const settingsLink = getByRole('link');
        expect(settingsLink).toHaveAttribute('href', '/settings');
    });

    it('HomeDescription component should be rendered', () => {
        render(<HomeDescription />, { wrapper: MemoryRouter });
    });

    it('SearchBar component should be rendered', () => {
        render(<SearchBar />, { wrapper: MemoryRouter });
    });
    
});
