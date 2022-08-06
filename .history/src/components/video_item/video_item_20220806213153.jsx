import React from 'react';

const VideoItem = (props) => {
  <div className="video__item">
    <span className="video__thumbnail">{props.videoitems.snippet.thumbnails}</span>
    <h1>{props.videoitems.snippet.title}</h1>;

  </div>



}


export default VideoItem;