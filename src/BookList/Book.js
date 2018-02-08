import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

const Book = ({book}) => {

  return (
    <Card>
      <CardMedia>
        <img src={book.imageLinks.thumbnail} alt={book.title}/>
      </CardMedia>
      <CardTitle title={book.title} subtitle={book.subtitle} />
    </Card>
  );

}

export default Book;
