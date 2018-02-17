import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Search from 'material-ui-icons/Search';
import ArrowBack from 'material-ui-icons/ArrowBack';
import { Link } from 'react-router-dom';
import Input, { InputAdornment } from 'material-ui/Input';
import * as BooksAPI from '../BooksAPI';
import Book from '../BookList/Book';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  searchIcon: {
    color: '#fff'
  },
  input: {
    borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: 'none',
      fontSize: 16,
      padding: '10px 12px',
      '&:focus': {
        border: 'none',
        boxShadow: 'none',
      },
      '&:hover': {
        border: 'none',
        boxShadow: 'none',
      },
  }
});

class BookSearch extends Component {

  //componentDidMount = () => {
  //}
  state = {
    listBooks: []
  }

  onHandleChange = (e) => {
    var query = e.target.value;
    BooksAPI.search(query)
      .then(data=> {
        this.setState ({
          listBooks: data
        })
      })
      .catch(err => {
        console.log("error: ", err);
      })
  }

  updateBookShelf = (book, self) => {
    BooksAPI.update(book, self)
      .then( result => {
        console.log("Result update: ", result);
        /* this.setState(state => ({
          currentlyReading: state.currentlyReading.filter(book => result.currentlyReading.indexOf(book.id)>=0),
          wantToRead: state.wantToRead.filter(book => result.wantToRead.indexOf(book.id)>=0),
          read: state.read.filter(book => result.read.indexOf(book.id)>=0)
        })); */
      });
  }

  render(){

    const { classes } = this.props;
    const { listBooks } = this.state;
    console.log("listBooks: ", listBooks);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton  className={classes.searchIcon} aria-label="Go Back">
                <ArrowBack />
              </IconButton>
            </Link>
              <Input
                placeholder="Search by title or author"
                className={classes.input}
                fullWidth={true}
                endAdornment={<InputAdornment position="end"><Search /></InputAdornment>}
                onChange={this.onHandleChange}
              />
          </Toolbar>
        </AppBar>
        { listBooks.length>0 && (listBooks.map( book => {
          return <Book
                    key={book.id}
                    book={book}
                    updateBookShelf={this.updateBookShelf}/>
        }))}
      </div>
    );
  }
}

export default withStyles(styles)(BookSearch);
