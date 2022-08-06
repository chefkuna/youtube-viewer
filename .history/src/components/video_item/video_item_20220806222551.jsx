import React from 'react';

const VideoItem = (props) => (
  <ul>
    <img 
      src={props.video.snippet.thumbnails.medium.url} 
      alt="video thumbnail" 
      />
    <div>
      <span className="video__title">"{props.video.snippet.title}"</span>
    </div>
  </ul>
)

export default VideoItem;