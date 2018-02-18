import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookMain from './BookList/BookMain';
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch/BookSearch';

import './app.css';

class BooksApp extends React.Component {
  state = {
    bookList: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then( bookList => {
          this.setState({
            bookList: bookList,
            currentlyReading: bookList.filter(book => book.shelf === "currentlyReading"),
            wantToRead: bookList.filter(book => book.shelf === "wantToRead"),
            read: bookList.filter(book => book.shelf === "read")
          });
    });
  }

  updateBookShelf = (book, self) => {
    BooksAPI.update(book, self)
      .then( result => {
        this.setState(state => ({
          currentlyReading: state.bookList.filter(book => result.currentlyReading.indexOf(book.id)>=0),
          wantToRead: state.bookList.filter(book => result.wantToRead.indexOf(book.id)>=0),
          read: state.bookList.filter(book => result.read.indexOf(book.id)>=0)
        }));
      });
  }

  render() {

    return (
        <div>
          <Route exact path="/" render={() => (
            <BookMain
                {...this.state}
                updateBookShelf={this.updateBookShelf} />
            )}>
          </Route>
          <Route exact path="/search" render={() => (
            <BookSearch
                {...this.state}
                updateBookShelf={this.updateBookShelf}/>
            )}>
          </Route>
        </div>
    );

  }
}

export default BooksApp;
