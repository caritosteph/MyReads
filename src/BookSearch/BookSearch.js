import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import ArrowBack from 'material-ui-icons/ArrowBack';
import { Link } from 'react-router-dom';
import Input, { InputAdornment } from 'material-ui/Input';
import * as BooksAPI from '../BooksAPI';
import BookList from '../BookList/BookList';
import EmptySearch from './EmptySearch';

import './bookSearch.css';

class BookSearch extends Component {

  state = {
    listBooks: []
  }

  onHandleChange = (e) => {
    var query = e.target.value;
    BooksAPI.search(query)
      .then(data=> {
        console.log("data: ", data);
        this.setState ({
          listBooks: data
        })
      })
      .catch(err => {
        console.log("error: ", err);
      })
  }

  updateBookShelf = (book, self) => {
    BooksAPI.update(book, self);
  }

  render(){

    const { listBooks } = this.state;

    return (
      <div className="search-container">
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton  className="icon-search" aria-label="Go Back">
                <ArrowBack />
              </IconButton>
            </Link>
              <Input
                autoFocus={true}
                placeholder="Search by title or author"
                className="search-input"
                fullWidth={true}
                endAdornment={<InputAdornment position="end"><Search /></InputAdornment>}
                onChange={this.onHandleChange}/>
          </Toolbar>
        </AppBar>
        {listBooks.length > 0 ? <BookList listBooks={listBooks} updateBookShelf={this.updateBookShelf}/> : <EmptySearch/>}
      </div>
    );
  }
}

export default BookSearch;
