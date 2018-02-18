import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';
import BookShelves from './BookShelves';

const BookMain = ({...props}) => {
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
                   <Search/>
                </IconButton>
              </Tooltip>
            </Link>
          </Toolbar>
        </AppBar>
        <BookShelves {...props}/>
      </div>
    )
}

export default BookMain;
