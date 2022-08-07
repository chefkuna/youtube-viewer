import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
      <div className={styles.navbar}>
        <i className="fa-brands fa-youtube"></i>
        <q className={styles.logoname}>Youtube</q>
        <input type="text" className={styles.search}/>
        <button type='submit' className={styles.search-button}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

  );

export default SearchHeader;