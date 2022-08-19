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
            <a href="https://www.loom.com/share/5f9d59cde0794b49847f18ce185129ad" target={'_blank'}>
                <h1 className='videoLink'> - Please click here for the presentation video !</h1>
            </a>
            <h3>- I forgot to mention in the video that when we reach the end of the users a message is displayed to tell the users that they have reach the end.</h3>
            <UserList />
        </>
    );
};

export default Home;
