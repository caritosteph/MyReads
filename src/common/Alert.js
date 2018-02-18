import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

class Alert extends Component {
  render() {
    const { showAlert, handleAlertClose } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={showAlert}
          onClose={handleAlertClose}
          autoHideDuration={1000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Update Successfuly</span>}
        />
      </div>
    );
  }
}

export default Alert;
