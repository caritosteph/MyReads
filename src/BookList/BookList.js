import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,
    },
    paper: {
      padding: 16,
      textAlign: 'center',
      color: 'rgb(36, 72, 159)',
    }
  }) ;

class BookList extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then( bookList => {
          console.log("bookList: ", bookList);
          this.setState(state => ({
            currentlyReading: bookList.filter(book => book.shelf === "currentlyReading"),
            wantToRead: bookList.filter(book => book.shelf === "wantToRead"),
            read: bookList.filter(book => book.shelf === "read")
          }));
    });
  }

  render() {

    const { currentlyReading, wantToRead, read } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Currently Reading</Paper>
          </Grid>
            {currentlyReading.map((book) => (
              <Book key={book.id} book={book}/>
            ))}

          <Grid item xs={12}>
            <Paper className={classes.paper}>Want to Read</Paper>
          </Grid>
          {wantToRead.map((book) => (
            <Book key={book.id} book={book}/>
          ))}
          <Grid item xs={12}>
            <Paper className={classes.paper}>Read</Paper>
          </Grid>
          {read.map((book) => (
            <Book key={book.id} book={book}/>
          ))}
        </Grid>
      </div>
    );
  }

}

export default  withStyles(styles)(BookList);
