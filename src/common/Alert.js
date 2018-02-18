import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

class Alert extends Component {
  render() {
    const { showAlert, handleAlertClose } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
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

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  handleAlertClose: PropTypes.func.isRequired
}

export default Alert;
