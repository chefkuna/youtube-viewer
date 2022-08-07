import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
    <div>
      <img src="images/logo.png" alt="youtube-logo" />
      <h2 className="youtube">Youtube</h2>
      <input type="text" />
      <img src="images/search.png" alt="search-button" />
    </div>
  );

export default SearchHeader;