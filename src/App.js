import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';
import BookList from './BookList/BookList';

class BooksApp extends React.Component {

  render() {

    return (
      <div className="navbar-books">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className="flex-typography">
              My Reads
            </Typography>
            <Link to="/search">
              <IconButton  className="icon-search" aria-label="Search">
                 <Search />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <BookList />
        <footer className="footer">
          <Icon>copyright</Icon><span> 2018 Carolyn Ulfe</span>
        </footer>
      </div>
    )
  }
}

export default BooksApp;
