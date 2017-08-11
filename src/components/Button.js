import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={() => console.log('pressed!')} style={buttonStyle}>
      <Text style={textStyle}>
      Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

// TouchableHighlight
// A wrapper for making views respond properly to touches.
// On press down, the opacity of the wrapped view is decreased, which allows the
// underlay color to show through, darkening or tinting the view.
// A button

// TouchableOpacity
// A wrapper for making views respond properly to touches.
// On press down, the opacity of the wrapped view is decreased,
// dimming it.
// Opacity is controlled by wrapping the children in an Animated.View, which is added to the view hiearchy. Be aware that this can affect layout.
// A button

export default Button;
