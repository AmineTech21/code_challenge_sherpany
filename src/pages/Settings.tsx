import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterNatContext } from '../contexts/FilterNatContext';
import HomeIcon from '@mui/icons-material/Home';


const Settings = () => {
    const { setFilter } = useContext(FilterNatContext);

    return (
        <>
            <div >
                <Link className="homeIcons" to="/">
                    <HomeIcon />
                </Link>
                <h3 className='filter_title'>Filter the Nationality</h3>
                <div className="filterNat">
                    <button className='buttons_settings' onClick={() => setFilter('ch')}>CH</button>
                    <button className='buttons_settings' onClick={() => setFilter('es')}>ES</button>
                    <button className='buttons_settings' onClick={() => setFilter('fr')}>FR</button>
                    <button className='buttons_settings' onClick={() => setFilter('gb')}>GB</button>
                    <button className='buttons_settings' onClick={() => setFilter('')}>Reset nationalities</button>
                </div>
            </div>
        </>
    );
};

export default Settings;
