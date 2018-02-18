import React from 'react';
import Book from './Book';
import Grid from 'material-ui/Grid';

const BookList = ({ listBooks, updateBookShelf }) => {
  return (
    <Grid container>
      {listBooks.map((book) => (
        <Book
          key={book.id}
          book={book}
          updateBookShelf={updateBookShelf}/>
      ))}
    </Grid>
  );
}

export default BookList;
