import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }
  render(){
    return (
      <form className="search-bar">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            onKeyPress={
              (event) => {
                if (event.key === 'Enter'){
                  this.props.onSearchTermChange(this.state.term);
                  event.preventDefault();
                  return false;
                }
              }
            }
            onChange={ (event) => this.setState({ term: event.target.value }) }
            placeholder="search video..."
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={ () => this.props.onSearchTermChange(this.state.term) }
            >
              Search
            </button>
          </span>
        </div>
      </form>
    );
  }
}
