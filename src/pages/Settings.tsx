import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FilterNatContext } from '../Contexts/FilterNatContext';

const Settings = () => {
    const { filter, setFilter } = useContext<any>(FilterNatContext);

    return (
        <>
            <Link to="/">Home</Link>
            <div className="filter">
                <button onClick={() => setFilter('ch')}>CH</button>
                <button onClick={() => setFilter('es')}>ES</button>
                <button onClick={() => setFilter('fr')}>FR</button>
                <button onClick={() => setFilter('gb')}>GB</button>
            </div>
        </>
    );
}

export default Settings
