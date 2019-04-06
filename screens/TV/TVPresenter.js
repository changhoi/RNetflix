import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const TVPresenter = ({ loading, popular, topRated, airingToday }) => (
  <Text>TV</Text>
);

TVPresenter.propTyeps = {
  loading: PropTypes.bool.isRequired,
  topRated: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
