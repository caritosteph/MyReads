import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';


const styles = {
  root: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap'
  }
};


class BookList extends Component {

  state = {
    bookList: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then( bookList => {
          console.log("bookList: ", bookList);
          this.setState({bookList});
    });
  }

  render(){
    let {bookList} = this.state;
    return (
      <div className="list-books-content">
        <GridList style={styles.gridList} padding={50} >
          {bookList.map((book) => (
            <Book key={book.id} book={book}/>
          ))}
        </GridList>
      </div>
    );
  }
}

export default BookList;
