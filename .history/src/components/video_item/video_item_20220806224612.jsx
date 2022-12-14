import React from 'react';
import styles from './video_item.module.css';

const VideoItem = props => (
  <ul className={styles.video}>
    <img className={styles.thumbnail}
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
    <div>
      <p className={styles.title}>{props.video.snippet.title}</p>
      <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
    </div>
  </ul>
)

export default VideoItem;