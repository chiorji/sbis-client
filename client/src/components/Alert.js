import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({openAlert, handleClose, msg, severity}) => {
  return <Snackbar
    autoHideDuration={6000}
    open={openAlert}
    onClose={handleClose}
    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    key='slide'
  >
    <MuiAlert
      elevation={6}
      variant="filled"
      severity={severity ? severity : 'success'}
      onClose={handleClose}
    >
      {msg}
    </MuiAlert>
  </Snackbar>;
};

export default Alert;
