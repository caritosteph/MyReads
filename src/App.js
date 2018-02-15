import React from 'react';
import './App.css';
import BookList from './BookList/BookList';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Search from 'material-ui-icons/Search';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%'
  },
  paper: {
    padding: 16,
    textAlign: 'center'
  },
  flex: {
    flex: 1
  },
  searchIcon: {
    color: '#fff'
  }
};

class BooksApp extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              My Reads
            </Typography>
            <Link to="/search">
              <IconButton  className={classes.searchIcon} aria-label="Search">
                 <Search />
              </IconButton>
            </Link>
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

export default withStyles(styles)(BooksApp);
