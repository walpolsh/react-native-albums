// index.ios.js. place code for IOS!

//components are JS functions which render JSX to our page or device.

//import a library to help create a component
import React from 'react';

//react knows how a component should behave
//knows how to take a bunch of components and make them work together

import { AppRegistry } from 'react-native';

// Text and AppRegistry are imported from the react-native library
// this is called destructured importing^
import Header from './src/components/header';

// Native knows how to output a component and place it on the screen of a device

//create a component
const App = () => (
  <Header />
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);

//'albums' is the project being rendered, and the function returns the component App.
