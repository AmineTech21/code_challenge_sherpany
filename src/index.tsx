import React from "react";
import ReactDOM from 'react-dom'
import useFetch from "./hooks/useFetch";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserModal from "./components/UserModal";

interface UserInterface {
    email: string
    gender: string
    name: any
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
    const [data] = useFetch<UserInterface[]>('https://randomuser.me/api/?results=10', [])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">More Info</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((user, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name.first}
                                    </TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                    <TableCell align="right">
                                        <UserModal
                                        email={user.email}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root)
