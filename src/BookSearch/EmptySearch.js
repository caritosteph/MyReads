import React from 'react';
import Icon from 'material-ui/Icon';

const EmptySearch = () => {
  return (

    <div className="empty-search">
      <h5>Search your books</h5>
      <Icon fontSize={true} className="empty-search-icon">sentiment_very_satisfied</Icon>
    </div>
  );
}

export default EmptySearch;
