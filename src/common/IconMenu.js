import React, { Component } from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

const ITEM_HEIGHT = 48;

class IconMenu extends Component {
    state = {
      anchorEl: null,
    };

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e, value) => {
      console.log("ev: ", event.target.value);
      console.log("value: ", value);
      this.setState({ anchorEl: null });
      console.log("this.props.updateBookShelf: ", this.props.updateBookShelf(this.props.book, value));
    };

  render() {
    const { selected } = this.props;
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
              selected={selected === "currentlyReading"}
              onClick={(e) => this.handleClose(e, "currentlyReading")}
              value="currentlyReading">
              Currently Reading
            </MenuItem>
            <MenuItem
              selected={selected === "wantToRead"}
              onClick={(e) => this.handleClose(e, "wantToRead")}
              value="wantToRead">
              Want to Read
            </MenuItem>
            <MenuItem
              selected={selected === "read"}
              onClick={(e) => this.handleClose(e, "read")}
              value="read">
              Read
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
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
