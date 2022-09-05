import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe(SearchBar, () => {
    it('The search bar is displayed when the app start', () => {
        const { getByPlaceholderText } = render(<SearchBar />);
        const searchBar = getByPlaceholderText('Search...');
        expect(searchBar).toBeInTheDocument();
    });
});
