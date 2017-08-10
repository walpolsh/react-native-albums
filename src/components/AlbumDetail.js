import React from 'react';
import { View, Text } from 'react-native';

// this will be a functional component

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View> 
    );
};

export default AlbumDetail;