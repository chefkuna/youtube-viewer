import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
    <header className={styles.header}>
      <img className={styles.logo} src="images/logo.png" alt="logo" />
      <h2 className={styles.title}>Youtube</h2>
      <input className={styles.input} type="search" placeholder="Search..."/>
      <img 
        className={styles.searhbutton}
        type="submit"
        src="images/search.png" 
        alt="search"/>
    </header>
  );

export default SearchHeader;