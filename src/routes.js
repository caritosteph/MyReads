import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import BookSearch from './BookSearch/BookSearch';

export default (
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={BookSearch} />
    </div>
  </Router>
);
