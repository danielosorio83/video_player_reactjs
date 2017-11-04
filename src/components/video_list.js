import React, { Component } from 'react';

import VideoListItem from './video_list_item';

export default class VideoList extends Component {
  renderItems(){
    return this.props.videos.map( (video) => {
      return <VideoListItem video={video} key={video.etag} onVideoSelect={this.props.onVideoSelect} />
    });
  }
  render(){
    return (
      <ul className="list-group col-md-4">
        {this.renderItems()}
      </ul>
    )
  }
}
