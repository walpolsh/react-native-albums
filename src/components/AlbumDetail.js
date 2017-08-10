import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// this will be a functional component

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View></View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
};

export default AlbumDetail;
