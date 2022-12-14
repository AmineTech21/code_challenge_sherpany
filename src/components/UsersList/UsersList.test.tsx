import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import UsersList from './UsersList';
import { getUsers } from '../../api/getUsersApi';

import * as api from "../../api/getUsersApi"
import UserModal from '../UserModal';

describe(UsersList, () => {
    it('The usersList render when the app start', () => {
        render(<UsersList />);
    });

    it('TableBody should be rendered', () => {
        const { queryAllByRole } = render(<UsersList />);
        const tableBody = queryAllByRole('rowgroup');
        waitFor(() => {
            expect(tableBody).toBeInTheDocument();
        });
    });

    it('The usersRows should be displayed', () => {
        const { getByRole } = render(<UsersList />);
        const usersRows = getByRole('row');
        expect(usersRows).toBeInTheDocument();
    });

    it('an array of usersInfo should be rendered in one row', async () => {
        const { queryAllByRole } = render(<UsersList />);
        const usersRows = queryAllByRole('row');
        expect(usersRows).toHaveLength(1);
    });

    it('Loading message should be rendered', () => {
        const { getByText } = render(<UsersList />);
        const loadingMessage = getByText('Loading...');
        expect(loadingMessage).toBeInTheDocument();
    });
});
