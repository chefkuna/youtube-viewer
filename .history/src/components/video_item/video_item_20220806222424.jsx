import React from 'react';

const VideoItem = (props) => (
  <li>
    <img 
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
    <div>

    </div>
  </li>
)

export default VideoItem;