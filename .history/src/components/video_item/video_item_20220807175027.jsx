import React, { useRef } from 'react';
import styles from './video_item.module.css';

const VideoItem = props => {

  inputRef = useRef();
  console.log(inputRef);

  const openVideo = () => {

  }

  const onClick = () => {
    openVideo();
  }

  return (
    <ul className={styles.container} onClick={onClick}>
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
  );
  }

export default VideoItem;