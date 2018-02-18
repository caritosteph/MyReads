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
            currentlyReading: bookList.filter(book => book.shelf === "currentlyReading"),
            wantToRead: bookList.filter(book => book.shelf === "wantToRead"),
            read: bookList.filter(book => book.shelf === "read")
          });
    });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then( result => {
        BooksAPI.getAll()
          .then( bookList => {
              this.setState({ bookList: bookList});
              BooksAPI.get(book.id)
                .then( detail => {
                  this.setState(state => ({
                    currentlyReading: shelf === "currentlyReading" ? state.currentlyReading.concat(detail) : state.bookList.filter(book => result.currentlyReading.indexOf(book.id)>=0),
                    wantToRead: shelf === "wantToRead" ? state.wantToRead.concat(detail) : state.bookList.filter(book => result.wantToRead.indexOf(book.id)>=0),
                    read: shelf === "read" ? state.read.concat(detail) : state.bookList.filter(book => result.read.indexOf(book.id)>=0)
                  }));
                });
            });
      });
  }

  render() {

    return (
        <div>
          <Route exact path="/" render={() => (
            <BookMain
                {...this.state}
                actionMenu={this.changeBookShelf} />
            )}>
          </Route>
          <Route exact path="/search" render={() => (
            <BookSearch
                actualBooks={this.state.bookList}
                actionMenu={this.changeBookShelf}/>
            )}>
          </Route>
        </div>
    );

  }
}

export default BooksApp;
