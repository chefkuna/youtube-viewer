import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
    <ul>
      {props.videolists.map(video => (
        <VideoItem key={video.id} videoitem={video} />
      ))}
    </ul>
  );

export default VideoList;