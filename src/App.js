import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        BookApp
        <RaisedButton type='submit' label='Submit' primary />

      </div>
    )
  }
}

export default BooksApp
