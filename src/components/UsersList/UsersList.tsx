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
import { getUsers } from '../../api/getUsersApi';
import { Link } from 'react-router-dom';
import { FilterNatContext } from '../../Contexts/FilterNatContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterContextInterface, UserInterface } from '../../ts/interfaces';
import SearchBar from '../SearchBar';
import Loading from '../Loading';
import EndUsersMessage from '../EndUsersMessage';

function UsersList() {
    const { filter, query } = useContext(FilterNatContext);
    const [page, setPage] = useState<number>(1);
    const [endPage, setEndPage] = useState<boolean>(false);
    const [users, setUsers] = useState<UserInterface[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            const newUsers = await getUsers(page, filter);
            setUsers((prev: any) => [...prev, ...newUsers]);
        };

        loadUsers();
    }, [page, filter]);

    return (
        <>
            <TableContainer className="table_users" component={Paper}>
                <InfiniteScroll
                    next={() => {
                        users.length < 1000 ? setPage(page + 1) : setEndPage(true);
                    }}
                    dataLength={users.length}
                    hasMore={true}
                    loader={endPage ? '' : <Loading />}
                    endMessage={'end of users catalog'}
                >
                    <Table aria-label="simple table">
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
                                .filter((users) => users.name.first.toLowerCase().includes(query) || users.name.last.toLowerCase().includes(query))
                                .map((user, index) => {
                                    return (
                                        <>
                                            <TableRow key={index} className="table_row">
                                                <TableCell className="table_cell" component="th" scope="row">
                                                    {' '}
                                                    <img className="avatar" src={user.picture.thumbnail} alt="" />{' '}
                                                </TableCell>
                                                <TableCell className="table_cell" align="left">
                                                    {user.name.first}
                                                </TableCell>
                                                <TableCell className="table_cell" align="left">
                                                    {user.name.last}
                                                </TableCell>
                                                <TableCell className="table_cell" align="left">
                                                    {user.login.username}
                                                </TableCell>
                                                <TableCell className="table_cell" align="left">
                                                    {user.email}
                                                </TableCell>
                                                <TableCell className="table_cell" align="left">
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
            {endPage && <EndUsersMessage />}
        </>
    );
}

export default UsersList;
