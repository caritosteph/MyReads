import React, { Component } from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

const ITEM_HEIGHT = 48;

class IconMenu extends Component {
    state = {
      anchorEl: null,
    };

    handleClick = e => {
      e.preventDefault();
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e, value) => {
      e.preventDefault();
      this.setState({ anchorEl: null });
      console.log("this.props.updateBookShelf: ", this.props.updateBookShelf(this.props.book, value));
    };

  render() {
    const { book } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton onClick={this.handleClick}>
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
          }}>
            <MenuItem
              selected={book.self === "currentlyReading"}
              onClick={(e) => this.handleClose(e, "currentlyReading")}
              value="currentlyReading">
              Currently Reading
            </MenuItem>
            <MenuItem
              selected={book.self === "wantToRead"}
              onClick={(e) => this.handleClose(e, "wantToRead")}
              value="wantToRead">
              Want to Read
            </MenuItem>
            <MenuItem
              selected={book.self === "read"}
              onClick={(e) => this.handleClose(e, "read")}
              value="read">
              Read
            </MenuItem>
            <MenuItem
              onClick={(e) => this.handleClose(e, "none")}>
              None
            </MenuItem>
        </Menu>
      </div>
    );
  }
}

IconMenu.propTypes = {

};

export default IconMenu;
