import React from 'react';
import { render, waitFor } from '@testing-library/react';
import EndUsersMessage from './EndUsersMessage';

describe(EndUsersMessage, () => {
    it('The EndUsersMessage should be displayed', () => {
        const { getByRole } = render(<EndUsersMessage />);
        const endMessage = getByRole('heading');
        expect(endMessage).toBeInTheDocument();
    });

    it('The EndUsersMessage should display "end of users catalog"', () => {
        const { getByRole } = render(<EndUsersMessage />);
        const endMessage = getByRole('heading');
        expect(endMessage).toHaveTextContent('end of users catalog');
    });
});
