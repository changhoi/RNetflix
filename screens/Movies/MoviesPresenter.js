import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Loading from '../../components/Loader';
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import { BG_COLOR } from '../../constants/Color';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({
  navigation,
  loading,
  upcoming,
  popular,
  nowPlaying,
  error
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <MovieSlider movies={nowPlaying} />
    </Container>
  );

export default withNavigation(MoviesPresenter);

MoviesPresenter.propTyeps = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  nowPlaying: PropTypes.array.isRequired,
  error: PropTypes.string
};
