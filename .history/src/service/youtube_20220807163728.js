class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular() {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAc0dyDnu29Ip5EJ11IJJDTIpfRW8trWvY", 
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAc0dyDnu29Ip5EJ11IJJDTIpfRW8trWvY`, 
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
  }

}