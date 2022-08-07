import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './video_search/search_header';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query).then(console.log);
  };

  useEffect(() => {
    youtube.mostPopular().then(console.log);
  }, []);
  
  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos} />
  </div>
  )
}

export default App;
