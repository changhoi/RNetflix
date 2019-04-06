import React from 'react';
import { Text } from 'react-native';

export default ({ loading, popular, topRated, airingToday }) => <Text>TV</Text>;

MoviesPresenter.propTyeps = {
  loading: PropTypes.bool.isRequired,
  topRated: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,
  error: PropTypes.string
};
