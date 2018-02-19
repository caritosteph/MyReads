
import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import IconMenu from '../common/IconMenu'
import BookDetail from './BookDetail';

const Book = ({ book, actionMenu }) => {
  /*
   * TODO: Show card book  with menu action and details
   */
    return (
      <Grid item xs={3}>
        <Card className="card-book">
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className="card-avatar">
                {book.title.charAt(0).toUpperCase()}
              </Avatar>
            }
            action={<IconMenu actionMenu={actionMenu} book={book}/>}
            title={book.title}
          />
          <CardMedia
            className="card-media"
            image={book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/250/1565C0/fff?text=No+Image+Available"}
          />
          <CardContent>
            <Typography component="p">
              <strong>Author(s):</strong> { book.authors ? book.authors.join(", ") : "No author"}
            </Typography>
            <Typography component="p">
              <strong>Category:</strong> {book.categories ? book.categories : "General"}
            </Typography>
          </CardContent>
          <CardActions className="card-actions" disableActionSpacing>
            <BookDetail book={book}/>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default Book;
