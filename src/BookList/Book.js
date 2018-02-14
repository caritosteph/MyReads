
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconMenu from '../common/IconMenu'

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 20,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Book extends React.Component {

  render() {
    const { classes, updateBookShelf, book } = this.props;

    return (
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={<IconMenu updateBookShelf={updateBookShelf} book={book}/>}
            title={book.title}
          />
          <CardMedia
            className={classes.media}
            image={book.imageLinks.thumbnail}
          />
          <CardContent>
            <Typography component="p">
              <strong>Author(s):</strong> {book.authors.join(", ")}
            </Typography>
            <Typography component="p">
              <strong>Category:</strong> {book.categories ? book.categories : "General"}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button size="small" color="primary">
              Show More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Book);
