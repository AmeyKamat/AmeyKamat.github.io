import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

import "./index.css"


const PortfolioModal = props => {
    const { 
        isOpen,
        project = {},
        onClose
    } = props;

    const handleClose = () => onClose()

    return <Dialog 
            fullWidth={true} 
            maxWidth="md" 
            open={isOpen} 
            onClose={handleClose}
            aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{project.name}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                You can set my maximum width and whether to adapt or not.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
    </Dialog>
}
  
export default PortfolioModal;