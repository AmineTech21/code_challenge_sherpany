import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FilterNatContext } from '../Contexts/FilterNatContext';

const SearchBar = () => {
    const { setQuery } = useContext(FilterNatContext);

    const handleChange = (event:any): void => {
        setQuery(event.target.value.toLowerCase());
    }
    
    return (
        <>
            <h1>Search for the mens in your city</h1>
            <div className="search">
                <div className="searchInputs">
                    <div className="searchBar">
                        <input type="text" placeholder={'Search...'} onChange={handleChange} />
                        <SearchIcon className="searchIcon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
