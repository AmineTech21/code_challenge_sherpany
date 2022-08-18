import React from 'react';
import { render } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Home from './Home';


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
});
