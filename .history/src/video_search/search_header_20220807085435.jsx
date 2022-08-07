import React from 'react';
import styles from './video_search.module.css';

const VideoSearch = (props) => (
      <div className={styles.navbar}>
        <i className="fa-brands fa-youtube"></i>
        <q className={styles.logoname}>Youtube</q>
        <input type="text" className={styles.search}/>
        <button type='submit' className={styles.search-button}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

  );

export default VideoSearch;