import React from 'react';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';

import './emptyShelf.css';

const EmptyShelf = () => {
  /*
   * TODO: Empty shelf view
   */
  return (
    <div className="empty-shelf">
      <h4>Empty Shelf</h4>
      <Link to="/search">
        <Tooltip id="tooltip-add" title="Add books">
          <Icon>note_add</Icon>
        </Tooltip>
      </Link>
    </div>
  );
}

export default EmptyShelf;
