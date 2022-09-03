import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { ModalInterface } from '../ts/interfaces';

const UserModal = (props: ModalInterface) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal open={open} keepMounted onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <>
                    <Box className="user-modal">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {props.street}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.city}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.state}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.postcode}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.phone}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.cell}
                        </Typography>
                        <Typography id="modal-modal-description">
                            {props.nat}
                        </Typography>
                    </Box>
                </>
            </Modal>
        </div>
    );
};

export default UserModal;
