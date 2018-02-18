import React from 'react';
import BookMain from './BookList/BookMain';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch/BookSearch';
import Alert from './common/Alert';

import './app.css';

class BooksApp extends React.Component {
  state = {
    bookList: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showAlert: false
  }

  componentDidMount() {
    /*
     * TODO: Getting all books and showing in each shelf
     */
    BooksAPI.getAll()
      .then( bookList => {
          this.setState({
            currentlyReading: bookList.filter(book => book.shelf === "currentlyReading"),
            wantToRead: bookList.filter(book => book.shelf === "wantToRead"),
            read: bookList.filter(book => book.shelf === "read")
          });
      })
      .catch( () => {
        this.resetValues()
      });
  }

  changeBookShelf = (book, shelf) => {
    /*
     * TODO: Change books of one shelf to another and it's saved in the database
     */
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
                    read: shelf === "read" ? state.read.concat(detail) : state.bookList.filter(book => result.read.indexOf(book.id)>=0),
                    showAlert: true
                  }));
                })
                .catch( () => {
                  this.resetValues()
                });
            })
            .catch( () => {
              this.resetValues()
            });
      })
      .catch( () => {
        this.resetValues()
      });
  }

  resetValues = () => {
    /*
     * TODO: Catching API errors
     */
    this.setState({
      bookList: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    });
  }

  handleAlertClose = () => {
    this.setState({ showAlert: false });
  };

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
          <Alert
            {...this.state}
            handleAlertClose={this.handleAlertClose} />
        </div>
    );

  }
}

export default BooksApp;
