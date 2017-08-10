// index.ios.js. place code for IOS!

//components are JS functions which render JSX to our page or device.

//import a library to help create a component
import React from 'react';

//react knows how a component should behave
//knows how to take a bunch of components and make them work together

import { AppRegistry, View } from 'react-native';

// Text and AppRegistry are imported from the react-native library
// this is called destructured importing^
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Native knows how to output a component and place it on the screen of a device

//create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//View Tags are the swiss army knife of tags^

//render it to the device
AppRegistry.registerComponent('albums', () => App);

//'albums' is the project being rendered, and the function returns the component App.
