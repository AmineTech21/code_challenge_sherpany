import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './assets/App.css'
import Settings from './pages/Settings';
import { FilterNatContext } from './Contexts/FilterNatContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { UserInterface } from './ts/interfaces';

const App = () => {
    const [filter, setFilter] = useLocalStorage('NAT', '');
    const [query, setQuery] = useState('');

    return (
        <>
            <FilterNatContext.Provider value={{ filter, setFilter, query, setQuery }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </Router>
            </FilterNatContext.Provider>
        </>
    );
};

export default App;
