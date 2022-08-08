class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos',{
      params: {
        part: 'snippet',
        char: 'mostPopular',
        maxResults: 25,
      }
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('videos',{
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      }
    });
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
