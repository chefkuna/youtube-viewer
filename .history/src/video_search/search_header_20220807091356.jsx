import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
    <header>
      <img src="images/logo.png" alt="logo" />
      <h2 className="youtube">Youtube</h2>
      <input type="search" placeholder="Search..."/>
      <img 
        className={styles.searchbtn}
        src="images/search.png" 
        alt="search-button" />
    </header>
  );

export default SearchHeader;