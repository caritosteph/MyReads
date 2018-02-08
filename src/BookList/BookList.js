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

  render(){
    let {currentlyReading, wantToRead, read} = this.state;

    return (
      <div>
        {
          currentlyReading.length > 0 && (
            <div>
              <h3>Currently Reading</h3>
              <div style={styles.root}>
                <GridList style={styles.gridList} padding={50}>
                  {currentlyReading.map((book) => (
                    <Book key={book.id} book={book}/>
                  ))}
                </GridList>
              </div>
            </div>

          )
        }
        {
          wantToRead.length > 0 && (
            <div>
              <h3>Want to Read</h3>
              <div style={styles.root}>
                <GridList style={styles.gridList} padding={50}>
                  {wantToRead.map( book => (
                    <Book key={book.id} book={book}/>
                  ))}
                </GridList>
              </div>
            </div>
          )
        }
        {
          read.length > 0 && (
            <div>
              <h3>Read</h3>
              <div style={styles.root}>
                <GridList style={styles.gridList} padding={50}>
                  {read.map((book) => (
                    <Book key={book.id} book={book}/>
                  ))}
                </GridList>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default BookList;
