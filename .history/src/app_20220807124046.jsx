import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './video_search/search_header';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=AIzaSyAc0dyDnu29Ip5EJ11IJJDTIpfRW8trWvY`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId}))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error))
  }
  
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAc0dyDnu29Ip5EJ11IJJDTIpfRW8trWvY", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error))
  }, []);

  return (
  <div className={styles.app}>
    <SearchHeader
      onSearch={search}
    />
    <VideoList videos={videos} />
  </div>
  )
}

export default App;
