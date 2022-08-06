import React from 'react';

const VideoItem = (props) => {
  <div className="video__item">
    <span className="video__thumbnail">{props.videoitems.snippet.thumbnails}</span>
    <span className='video__title'>{props.videoitems.snippet.title}</span>;
  </div>



}


export default VideoItem;