import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="images/logo.png" alt="logo" />
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <input className={styles.input} type="search" placeholder="Search..."/>
      <button className={styles.button} type='submit'>
        <img 
          className={styles.buttonImg}
          src="images/search.png" 
          alt="search"/>
      </button>
 
    </header>
  );

export default SearchHeader;