import React from 'react';
import { Text } from 'react-native';

const Button = () => {
  return (
    <Text>
      Click me!!!
    </Text>
  );
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


export default Button;
