import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './assets/App.css'
import Settings from './pages/Settings';
import { FilterNatContext } from './contexts/FilterNatContext';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
    const [filter, setFilter] = useLocalStorage('NAT', '');

    return (
        <>
            <FilterNatContext.Provider value={{ filter, setFilter }}>
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
