import React from 'react';
import Book from './Book';
import Grid from 'material-ui/Grid';

const BookList = ({ listBooks, actionMenu }) => {
  /*
   * TODO: add book list in the view
   */
  return (
    <Grid container>
      {listBooks.map((book) => (
        <Book
          key={book.id}
          book={book}
          actionMenu={actionMenu}/>
      ))}
    </Grid>
  );
}

export default BookList;
