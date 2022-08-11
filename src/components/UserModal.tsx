import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserModal = (props: any) => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
                                        open={open}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        >
                                            <>

                                            <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">{props.street}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.city}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.state}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.postcode}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.phone}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.cell}</Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{props.nat}</Typography>
                                        </Box>
                                            </>
                                        </Modal>
    </div>
  )
}

export default UserModal
