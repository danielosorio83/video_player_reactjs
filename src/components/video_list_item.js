import React, { Component } from 'react';

export default class VideoListItem extends Component {
  render(){
    const { video } = this.props;
    const { snippet } = video;
    const img = snippet.thumbnails.default;
    return (
      <li className="list-group-item" onClick={() => this.props.onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object img-responsive" src={img.url} />
          </div>
          <div className="media-right">
            <h4 className="media-heading">{snippet.title}</h4>
          </div>
        </div>
      </li>
    )
  }
}
