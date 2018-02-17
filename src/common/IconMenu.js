import React, { Component } from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

//const ITEM_HEIGHT = 48;

class IconMenu extends Component {
    state = {
      anchorEl: null,
    };

    handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    selectShelf = (event, value) => {
      this.props.updateBookShelf(this.props.book, value);
      this.setState({ anchorEl: null });
    };

  render() {
    const { book } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
            //  maxHeight: ITEM_HEIGHT * 4.5,
            //  width: 200,
            },
          }}>
            <MenuItem
              selected={book.shelf === "currentlyReading"}
              onClick={(e) => this.selectShelf(e, "currentlyReading")}>
              Currently Reading
            </MenuItem>
            <MenuItem
              selected={book.shelf === "wantToRead"}
              onClick={(e) => this.selectShelf(e, "wantToRead")}>
              Want to Read
            </MenuItem>
            <MenuItem
              selected={book.shelf && book.shelf === "read"}
              onClick={(e) => this.selectShelf(e, "read")}
              value="read">
              Read
            </MenuItem>
            <MenuItem
              selected={!book.shelf}
              onClick={(e) => this.selectShelf(e, "none")}>
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
