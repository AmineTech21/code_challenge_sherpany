import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UsersList/UsersList';
import SettingsIcon from '@mui/icons-material/Settings';

const Home = () => {
    return (
        <>
            <div className="searchIcon">
                <Link to="settings">
                    <SettingsIcon></SettingsIcon>
                </Link>
            </div>
            <UserList />
        </>
    );
};

export default Home;
