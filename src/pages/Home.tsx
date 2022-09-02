import React from 'react';
import { Link, Router } from 'react-router-dom';
import UserList from '../components/UsersList/UsersList';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchBar from '../components/SearchBar';
import HomeDescription from '../components/HomeDescription';

const Home = () => {
    return (
        <>
            <Link to="/settings">
                <div className="homeIcon">
                    <SettingsIcon></SettingsIcon>
                </div>
            </Link>
            <HomeDescription/>
            <SearchBar />
            <UserList />
        </>
    );
};

export default Home;
