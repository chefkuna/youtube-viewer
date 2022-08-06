import React from 'react';

const VideoItem = (props) => {
  console.log('{props.video.snippet.thumbnails.medium.url}');
  <li>
    <img 
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
  </li>
} 

export default VideoItem;