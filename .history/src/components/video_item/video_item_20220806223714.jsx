import React from 'react';
import styles from './video_item.module.css';

const VideoItem = props => (
  <ul>
    <img 
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
    <div>
      <p>{props.video.snippet.title}</p>
      <p>{props.video.snippet.channelTitle}</p>
    </div>
  </ul>
)

export default VideoItem;