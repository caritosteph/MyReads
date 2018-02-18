import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import BookList from './BookList';
import EmptyShelf from './EmptyShelf';

import './books.css';

const BookShelves = ({...props}) => {

  const { currentlyReading, wantToRead, read, actionMenu } = props;

  return (
    <div className="grid-books">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className="paper-shelf">Currently Reading</Paper>
        </Grid>
        {currentlyReading && currentlyReading.length > 0 ? <BookList listBooks={currentlyReading} actionMenu={actionMenu}/> : <EmptyShelf/>}
        <Grid item xs={12}>
          <Paper className="paper-shelf">Want to Read</Paper>
        </Grid>
        {wantToRead && wantToRead.length > 0 ? <BookList listBooks={wantToRead} actionMenu={actionMenu}/> : <EmptyShelf/>}
        <Grid item xs={12}>
          <Paper className="paper-shelf">Read</Paper>
        </Grid>
        {read && read.length > 0 ? <BookList listBooks={read} actionMenu={actionMenu}/> : <EmptyShelf/>}
      </Grid>
    </div>
  );
}

export default  BookShelves;
