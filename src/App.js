import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';
import BookShelves from './BookList/BookShelves';

import './app.css';

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
              <Tooltip id="tooltip-search" title="Search books">
                <IconButton  className="icon-search" aria-label="Search">
                   <Search />
                </IconButton>
              </Tooltip>
            </Link>
          </Toolbar>
        </AppBar>
        <BookShelves />
        <footer className="footer">
          <Icon>copyright</Icon><span> 2018 Carolyn Ulfe</span>
        </footer>
      </div>
    )
  }
}

export default BooksApp;
