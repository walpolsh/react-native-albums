import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// this will be a functional component

const AlbumDetail = ({ album }) => {
  //^ import the object album from props, rather than just props from the album object
  //this is more specific
  const { title, artist, thumbnail_image, image } = album;

  //^^ destructuring assignment: used on the left-hand side of the assignment
  // to define what values to unpack from the sourced variable.
  // This is a good approach when making multiple calls to your props object
  /* Ex
  var x = [1, 2, 3, 4, 5];
  var [y, z] = x;
  console.log(y); // 1
  console.log(z); // 2
  */

  //very cool technique

  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  //^^ AGAIN WITH THE COOL DESTRUCTURING!
  //{styles.thumbnailStyle} === {thumbnailStyle}

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ url: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
