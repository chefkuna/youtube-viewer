import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAc0dyDnu29Ip5EJ11IJJDTIpfRW8trWvY", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  console.log(VideoList);
  return <VideoList videos={videos} />;
}

export default App;
