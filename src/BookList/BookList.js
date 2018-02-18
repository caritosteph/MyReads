import React from 'react';
import { PropTypes } from 'prop-types';
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

BookList.propTypes = {
  listBooks: PropTypes.array.isRequired,
  actionMenu: PropTypes.func.isRequired
}

export default BookList;
