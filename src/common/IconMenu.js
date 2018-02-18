import React, { Component } from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

const ITEM_HEIGHT = 50;

class IconMenu extends Component {
    state = {
      anchorEl: null,
      itemValue: this.props.book.shelf
    };

    handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    selectShelf = (e, value) => {
      if(this.state.itemValue === value) {
        return;
      }
      this.props.actionMenu(this.props.book, value);
      this.setState({
        anchorEl: null,
        itemValue: value
      });
    };

  render() {

    const { anchorEl, itemValue } = this.state;

    return (
      <div>
        <Tooltip id="tooltip-menu" title="Change shelf">
           <IconButton
             aria-label="More"
             aria-owns={anchorEl ? 'long-menu' : null}
             aria-haspopup="true"
             onClick={this.handleClick}>
             <MoreVertIcon />
           </IconButton>
         </Tooltip>
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
               selected={itemValue === "currentlyReading"}
               onClick={(e) => this.selectShelf(e, "currentlyReading")}>
               Currently Reading
             </MenuItem>
             <MenuItem
               selected={itemValue === "wantToRead"}
               onClick={(e) => this.selectShelf(e, "wantToRead")}>
               Want to Read
             </MenuItem>
             <MenuItem
               selected={itemValue === "read"}
               onClick={(e) => this.selectShelf(e, "read")}>
               Read
             </MenuItem>
             <MenuItem
               selected={itemValue === "none" || !itemValue}
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
