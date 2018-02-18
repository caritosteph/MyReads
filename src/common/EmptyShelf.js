import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';

const EmptyShelf = () => {
  return (
    <div className="empty-shelf">
      <i class="material-icons">note_add</i>
    </div>
  );
}

EmptyShelf.propTypes = {

};

export default EmptyShelf;
