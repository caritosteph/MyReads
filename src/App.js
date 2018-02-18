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

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then( result => {
        this.setState(state => ({
          currentlyReading: state.bookList.filter(book => result.currentlyReading.indexOf(book.id)>=0),
          wantToRead: state.bookList.filter(book => result.wantToRead.indexOf(book.id)>=0),
          read: state.bookList.filter(book => result.read.indexOf(book.id)>=0)
        }));

      });
  }

  addToBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.get(book.id)
          .then( result => {
            switch (shelf) {
              case "currentlyReading":
                this.setState(state => ({
                  currentlyReading: state.currentlyReading.concat(result)
                }));
                break;
              case "wantToRead":
                this.setState(state => ({
                  wantToRead: state.wantToRead.concat(result)
                }));
                break;
              case "read":
                this.setState(state => ({
                  read: state.read.concat(result)
                }));
                break;
              default: break;
            }
            console.log("addBookShelf: ", this.state);
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
                {...this.state}
                actionMenu={this.addToBookShelf}/>
            )}>
          </Route>
        </div>
    );

  }
}

export default BooksApp;
