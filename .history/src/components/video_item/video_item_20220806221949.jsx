import React from 'react';

const VideoItem = (props) => {
  <li>
    <img src={props.video.snippet.thumbnails.medium.url} alt="video thumbnail" className="" />
  </li>
} 

export default VideoItem;