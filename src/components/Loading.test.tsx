import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Loading from './Loading';

describe(Loading, () => {
    it('The Loading should be displayed', () => {
        const { getByRole } = render(<Loading />);
        const LoadingMessage = getByRole('heading');
        expect(LoadingMessage).toBeInTheDocument();
    });

    it('The Loading should display "Loading..."', () => {
        const { getByRole } = render(<Loading />);
        const LoadingMessage = getByRole('heading');
        expect(LoadingMessage).toHaveTextContent('Loading...');
    });
});
