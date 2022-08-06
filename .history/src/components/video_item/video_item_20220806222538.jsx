import React from 'react';

const VideoItem = (props) => (
  <li>
    <img 
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
    <div>
      <span className="video__title">"{props.video.snippet.title}"</span>
    </div>
  </li>
)

export default VideoItem;