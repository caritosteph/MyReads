import React from 'react';
import './App.css';
import BookList from './BookList/BookList';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: '100%'
  },
  paper: {
    padding: 16,
    textAlign: 'center'
  }
};

class BooksApp extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My Reads
            </Typography>
          </Toolbar>
        </AppBar>
        <BookList />
        <footer>
            <div>@Copyright 2018 Carolyn Ulfe</div>
        </footer>
      </div>
    )
  }
}

export default BooksApp;
