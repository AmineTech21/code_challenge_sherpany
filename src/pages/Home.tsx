import React from 'react';
import { Link, Router } from 'react-router-dom';
import UserList from '../components/UsersList/UsersList';
import SettingsIcon from '@mui/icons-material/Settings';

const Home = () => {
    return (
        <>
                <Link to="/settings">
                    <div className="homeIcons">
                        <SettingsIcon className="homeIcons"></SettingsIcon>
                    </div>
                </Link>
            <h1>Hello</h1>
            <h1>Sherpany I'm the one you need in your team !!!</h1>
            <UserList />
        </>
    );
};

export default Home;
