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
            <h2>Sherpany I'm the one you need in your team !!!</h2>
            <h3>Sherpany I'm the one you need in your team !!!</h3>
            <h4>Sherpany I'm the one you need in your team !!!</h4>
            <h5>Sherpany I'm the one you need in your team !!!</h5>
            <h6>Sherpany I'm the one you need in your team !!!</h6>
            <UserList />
        </>
    );
};

export default Home;
