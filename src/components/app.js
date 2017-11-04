import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDQKnSUqQ4J52VIZXSMOxuGyyaWFiPT5d8';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}
