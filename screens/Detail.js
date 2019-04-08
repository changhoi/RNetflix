import React from 'react';
import { Text } from 'react-native';

export default ({
  navigation: {
    state: {
      params: { id, isMovie }
    }
  }
}) => (
  <Text>
    {id}
    {isMovie ? 'Movie' : 'TV'}
  </Text>
);
