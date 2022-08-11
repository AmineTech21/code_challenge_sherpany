import React, { useContext, useEffect, useState } from 'react';
import './UsersList.css';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserModal from '../UserModal';
import {getUsers} from '../../api/getUsersApi';
import { Link } from 'react-router-dom';
import { FilterNatContext } from '../../Contexts/FilterNatContext';
import InfiniteScroll from 'react-infinite-scroll-component';

interface SearchInterface {
    value: any;
    title: any;
    link: any;
    placeholder: any;
    data: any;
}

function SearchBar() {
    const { filter } = useContext<any>(FilterNatContext);
    const [query, setQuery] = useState<any>('');
    const [page, setPage] = useState<any>(1);
    const [endPage, setEndPage] = useState<any>(false);
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const loadUsers = async () => {
            const newUsers = await getUsers(page, filter);
            setUsers((prev: any) => [...prev, ...newUsers]);
        };

        loadUsers();
    }, [page]);

    return (
        <>
            {/* <div className="searchIcon">
                <Link to="settings">
                    <SettingsIcon></SettingsIcon>
                </Link>
            </div> */}

            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={'Search...'} onChange={(event) => setQuery(event.target.value.toLowerCase())} />

                    <div className="searchIcon">
                        <SearchIcon />
                    </div>
                </div>
            </div>

            <TableContainer component={Paper}>
                <InfiniteScroll
                    next={() => {
                        users.length < 1000 ? setPage(page + 1) : setEndPage(true);
                    }}
                    dataLength={users.length}
                    hasMore={true}
                    loader={endPage ? '' : <h3>Loading...</h3>}
                    endMessage={'end of users catalog'}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Picture</TableCell>
                                <TableCell align="left">First&nbsp;Name</TableCell>
                                <TableCell align="left">Last&nbsp;Name</TableCell>
                                <TableCell align="left">Username</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">More</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .filter((users: any) => users.name.first.toLowerCase().includes(query) || users.name.last.toLowerCase().includes(query))
                                .map((user: any, index: any): any => {
                                    return (
                                        <>
                                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row">
                                                    {' '}
                                                    <img className="avatar" src={user.picture.thumbnail} alt="" />{' '}
                                                </TableCell>
                                                <TableCell align="left">{user.name.first}</TableCell>
                                                <TableCell align="left">{user.name.last}</TableCell>
                                                <TableCell align="left">{user.login.username}</TableCell>
                                                <TableCell align="left">{user.email}</TableCell>
                                                <TableCell align="left">
                                                    <UserModal
                                                        street={[user.location.street.number, ' ', user.location.street.name]}
                                                        city={user.location.city}
                                                        state={user.location.state}
                                                        postcode={user.location.postcode}
                                                        phone={user.phone}
                                                        cell={user.cell}
                                                        nat={user.nat}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </InfiniteScroll>
            </TableContainer>
            {endPage && <h3>end of users catalog</h3>}
        </>
    );
}

export default SearchBar;
