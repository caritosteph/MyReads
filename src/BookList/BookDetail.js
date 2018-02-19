import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BookDetail extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { book } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen} className="btn-show-detail">Show More</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className="navbar-book-detail">
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className="flex-typography">
                {book.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="content-detail">
            <Grid container  >
              <Grid item xs={3} sm={3}>
                <Paper className="image-detail">
                  <img alt={book.title} src={book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/250/1565C0/fff?text=No+Image+Available"} height="400" width="300"/>
                </Paper>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography component="p">
                  <strong>Author(s):</strong> { book.authors ? book.authors.join(", ") : "No author"}
                </Typography>
                <Typography component="p">
                  <strong>Category:</strong> {book.categories ? book.categories : "General"}
                </Typography>
                <Typography component="p">
                  <strong>Published Date:</strong> {book.publishedDate ? book.publishedDate : ""}
                </Typography>
                <Typography component="p">
                  <strong>Publisher:</strong> {book.publisher ? book.publisher : ""}
                </Typography>
                <Typography component="p">
                  <strong>Version:</strong> {book.contentVersion ? book.contentVersion : ""}
                </Typography>
                <Typography component="p">
                  <strong>Language:</strong> {book.language ? book.language : ""}
                </Typography>
                <Typography component="p" className="book-detail-description">
                  <strong>Description:</strong> {book.description ? book.description : ""}
                </Typography>
              </Grid>
            </Grid>
          </div>

        </Dialog>
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetail;
