import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
    <div>
      <img src="images/logo.png" alt="youtube-logo" />
      <q className="youtube">Youtube</q>
    </div>
  );

export default SearchHeader;