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

    handleClose = () => {
      this.setState({ anchorEl: null });
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
            <MenuItem selected={selected === "currentlyReading"}
              onClick={this.handleClose}>
              Currently Reading
            </MenuItem>
            <MenuItem selected={selected === "wantToRead"}
              onClick={this.handleClose}>
              Want to Read
            </MenuItem>
            <MenuItem selected={selected === "read"}
              onClick={this.handleClose}>
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
