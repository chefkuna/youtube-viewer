import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/video_search/search_header';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);

  const search = query => {
    youtube.search(query)
      .then(query)
      .then(videos => setVideos(videos));
  }

  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    {
      selectedVideo && <VideoDetail video={selectedVideo}/>
    }
    <VideoList videos={videos} />
  </div>
  )
}

export default App;
