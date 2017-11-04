import React, { Component } from 'react';

export default class VideoDetail extends Component {
  render(){
    const { video } = this.props;
    if (!video) { return <div>Loading...</div> }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <h4>{video.snippet.title}</h4>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    )
  }
}
