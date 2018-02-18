import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import * as BooksAPI from '../BooksAPI';
import BookList from './BookList';
import './books.css';

class BookShelves extends Component {
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

    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div className="grid-books">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper-shelf">Currently Reading</Paper>
          </Grid>
          <BookList listBooks={currentlyReading} updateBookShelf={this.updateBookShelf}/>
          <Grid item xs={12}>
            <Paper className="paper-shelf">Want to Read</Paper>
          </Grid>
          <BookList listBooks={wantToRead} updateBookShelf={this.updateBookShelf}/>
          <Grid item xs={12}>
            <Paper className="paper-shelf">Read</Paper>
          </Grid>
          <BookList listBooks={read} updateBookShelf={this.updateBookShelf}/>
        </Grid>
      </div>
    );
  }
}

export default  BookShelves;
