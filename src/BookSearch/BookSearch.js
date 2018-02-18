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

const ENTER_KEY = 13;

class BookSearch extends Component {

  state = {
    listBooks: []
  }

  onHandleChange = (e) => {
    const query = e.target.value ? e.target.value : "";
    const actualBooks = this.props.actualBooks;

    BooksAPI.search(query)
      .then(search => {
        this.setState ({
          listBooks: search ? this.setBookShelf(search, actualBooks) : []
        });
      })
      .catch(err => {
        console.error("error: ", err);
      });
  }

  onHandleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this.onHandleChange(e);
    }
  }

  setBookShelf = (search, actualBooks) => {
    return search.map(book => {
      for (var i = 0, arr = actualBooks.length; i < arr; i++) {
        if(actualBooks[i].id === book.id) {
          book.shelf = actualBooks[i].shelf;
        }
      }
      return book;
    })
  }

  render(){

    const { listBooks } = this.state;
    const { actionMenu } = this.props;

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
                onChange={this.onHandleChange}
                onKeyDown={this.onHandleKeyDown}/>
          </Toolbar>
        </AppBar>
        {listBooks && listBooks.length > 0 ? <BookList listBooks={listBooks} actionMenu={actionMenu}/> : <EmptySearch/>}
      </div>
    );
  }
}

export default BookSearch;
