import React from 'react';

const VideoItem = (props) => {
  // <div className="video__item">
  //   <div className="video__thumbnail">{props.videoitems.snippet.thumbnails}</div>
    <span className='video__title'>{props.videoitems.snippet.title}</span>;
  // </div>
}

export default VideoItem;