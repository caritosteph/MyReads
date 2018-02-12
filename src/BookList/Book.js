
import React from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Grid from 'material-ui/Grid';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

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
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const ITEM_HEIGHT = 48;


class Book extends React.Component {

  state = {
      anchorEl: null,
    };

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <div>
                <IconButton
                  onClick={this.handleClick}
                  >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200,
                    },
                  }}
                >
                    <MenuItem selected={this.props.book.shelf === "currentlyReading"} onClick={this.handleClose}>
                      Currently Reading
                    </MenuItem>
                    <MenuItem selected={this.props.book.shelf === "wantToRead"} onClick={this.handleClose}>
                      Want to Read
                    </MenuItem>
                    <MenuItem selected={this.props.book.shelf === "read"} onClick={this.handleClose}>
                      Read
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      None
                    </MenuItem>
                </Menu>
              </div>

            }
            title={this.props.book.title}
          />
          <CardMedia
            className={classes.media}
            image={this.props.book.imageLinks.thumbnail}
          />
          <CardContent>
            <Typography component="p">
              <strong>Author(s):</strong> {this.props.book.authors.join(", ")}
            </Typography>
            <Typography component="p">
              <strong>Category:</strong> {this.props.book.categories ? this.props.book.categories : "General"}
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

/*import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import React, { Component } from 'react';

import { Paper, RaisedButton, MuiThemeProvider, ToolbarTitle, Toolbar, Slider } from 'material-ui';

 class Book extends React.Component {
	state={
	  zDepth: 0
  }
	handleMouseEnter = () =>{
  	this.setState({zDepth : 2})
  }

  handleMouseLeave = () =>{
  	this.setState({zDepth : 0})
  }

  render() {
    const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
    const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
    const menuIcon = <FontIcon className="material-icons">more_vert</FontIcon>;
    const menu =   <FontIcon className="material-icons">more_vert</FontIcon>;
    return (
      <div className="item">
        <Card >
          <CardHeader
              title={this.props.book.title}
              subtitle="Subtitle"
              avatar={this.props.book.imageLinks.thumbnail}
              children={<div className="hi">
                <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Currently Reading" />
      <MenuItem primaryText="Want to Read" />
      <MenuItem primaryText="Read" />
      <MenuItem primaryText="None" />
    </IconMenu>
              </div>

              }
            />
           <CardMedia >
             <img src={this.props.book.imageLinks.thumbnail} alt=""/>
           </CardMedia>
           <CardActions>
               <BottomNavigation>
                 <BottomNavigationItem
                   label="Recents"
                   icon={recentsIcon}
                 />
                 <BottomNavigationItem
                   label="Favorites"
                   icon={favoritesIcon}
                 />
               </BottomNavigation>
           </CardActions>
        </Card>
      </div>

    );
  }

}


export default Book;
*/
/*
<Card className="item">
  <CardHeader title={this.props.book.title}/>
  <CardMedia>
    <img src={this.props.book.imageLinks.smallThumbnail} alt=""/>
  </CardMedia>
  <CardActions>
      <BottomNavigation>
        <BottomNavigationItem
          label="Recents"
          icon={recentsIcon}
        />
        <BottomNavigationItem
          label="Favorites"
          icon={favoritesIcon}
        />
        <BottomNavigationItem
          label="Change"
          icon={menuIcon}
        />
      </BottomNavigation>
  </CardActions>
</Card>
*/
