import React from 'react';

const VideoItem = (props) => { 
  <li>
    <img 
      src={props.videoitems.snippet.thumbnails.medium.url} 
      alt="video thumbnail" />
  </li>



}

export default VideoItem;