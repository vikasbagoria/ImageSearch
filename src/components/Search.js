import React, { Component } from 'react';
import ImageResults from './ImageResults';
import './../App.css';
import axios from 'axios';

class Search extends Component {
  state = {
    searchText: "",
    apiUrl: 'https://pixabay.com/api',
    apiKey: '22509623-77592e591df034b0b8bcf7773',
    images: [],
    apiFlickerurl: 'https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=a52af3e4cbb20ae41cf953f426ad26cd&format=json&nojsoncallback=1&api_sig=a0d44ce8ffd35e5c3af7ad16c118000a',
  };
  inputEvent = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo`
          // `${this.state.apiFlickerurl}`
        ).then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  };

  render() {
    console.log(this.state.images);
    return (
      <>
        <div className="searchbar">
          <h1>Search Photos</h1>
          <input type="text" placeholder="type here..."
            value={this.state.searchText} name="searchText"
            onChange={this.inputEvent} />
        </div>
        <br />
        {/* <div className="result"> {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null} </div> */}
        {/* <ImageResults images={this.state.images} /> */}
        <ImageResults images={this.state.images} />
      </>
    )
  }
}
export default Search;
