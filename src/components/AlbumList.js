import React, { Component } from 'react';

//^destructured but still importing React

import { ScrollView } from 'react-native';
import axios from 'axios';

//functional components present static data, can't handle fetching data, easy to write
//class components use dynamic sources of data that might change
//functional is one way, data goes in, JSX comes out; ex. Header
//lifecycle methods are an advantage of class based components
//functions that are placed on our class are lifecycle methods
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  //initialized empty state, no albums yet
  //state = a plain JS OBJECT used to record and respond to user-triggered events
  //Call 'this.setState' when you need to re-render/update what a component shows, USE STATE!
  //Only change state with 'setState', do not do changes
  //update the state over time.

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  };

  //we are passing an object containing the data we fetched to the state.
  //setState is defined automatically by react, its our method to change state.
  //^^ componentWillMount() sets up so data can be retrieved when the component mounts
  //componentWillMount as soon as the component loads

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  //^^^By far the best key is an individual id such as the album title.
  //^^album={album} is passing album as props to the child component.

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
