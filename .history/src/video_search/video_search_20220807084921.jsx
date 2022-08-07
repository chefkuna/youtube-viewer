import React from 'react';
import styles from './video_search.module.css';

const VideoSearch = (props) => (
      <div>
        <i class="fa-brands fa-youtube"></i>
        <q>Youtube</q>
      </div>
  );

export default VideoSearch;



const VideoItem = props => (
  <ul className={styles.container}>
    <div className={styles.video}>
      <img className={styles.thumbnail}
        src={props.video.snippet.thumbnails.medium.url} 
        alt="video thumbnail" 
        />
      <div className={styles.metadata}>
        <p className={styles.title}>{props.video.snippet.title}</p>
        <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  </ul>
)

export default VideoItem;