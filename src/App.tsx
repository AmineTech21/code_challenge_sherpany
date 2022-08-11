import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { FilterNatContext } from './Contexts/FilterNatContext';

const App = () => {
    const [filter, setFilter] = useState<any>('');

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
