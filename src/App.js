import React, { Component } from 'react';
import BookMain from './BookList/BookMain';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch/BookSearch';
import Alert from './common/Alert';

import './app.css';

class App extends Component {
  state = {
    bookList: [],
    showAlert: false,
    showDetail: false
  }

  componentDidMount() {
    /*
     * TODO: Getting all books and showing in each shelf
     */
      this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then( bookList => {
        this.setState({ bookList });
      })
      .catch( () => {
        this.resetValues()
      });
  }

  getBooksByShelf = () => {
    const { bookList } = this.state;
    this.currentlyReading = this.filterByShelf(bookList, "currentlyReading");
    this.wantToRead = this.filterByShelf(bookList, "wantToRead");
    this.read = this.filterByShelf(bookList, "read");
  }

  filterByShelf = (list, shelf) => {
    /*
     * TODO: Getting books by shelf
     */
    return list.filter(book => book.shelf === shelf);
  }

  changeBookShelf = (book, shelf) => {
    /*
     * TODO: Change books of one shelf to another and it's saved in the database
     */
    BooksAPI.update(book, shelf)
      .then( () => {
          this.actionShelf(book, shelf);
      })
      .catch( () => {
        this.resetValues()
      });
  }

  actionShelf = (book, shelf) => {
    /*
     * TODO: Update if the book is already categorized or insert if it is a new book
     */
    this.setState(state => {
      const actualBooksID = state.bookList.map(book => book.id);
      const isCategorized = this.isCategorized(actualBooksID, book)
      if(isCategorized) {
        state.bookList[isCategorized].shelf = shelf; // updating the book information
      } else {
        book.shelf = shelf; // updating the book information
        state.bookList.push(book); // adding a book into the initial list
      }
      const bookList = state.bookList
      return { bookList, showAlert: true};
    });
  }

  isCategorized = (booksID, book) => {
    const positionBook = booksID.indexOf(book.id);
    return positionBook > 0 ? positionBook : 0;
  }

  resetValues = () => {
    /*
     * TODO: Catching API errors
     */
    this.setState({
      bookList: [],
      showAlert: false,
      showDetail: false
    });
  }

  handleAlertClose = () => {
    this.setState({ showAlert: false });
  };

  render() {

    this.getBooksByShelf();

    return (
        <div>
          <Route exact path="/" render={() => (
            <BookMain
                currentlyReading={this.currentlyReading}
                wantToRead={this.wantToRead}
                read={this.read}
                actionMenu={this.changeBookShelf}/>
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

export default App;
