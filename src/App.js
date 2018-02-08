import React from 'react';
import './App.css';
import BookList from './BookList/BookList';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <BookList />
      </div>
    )
  }

}

export default BooksApp;
