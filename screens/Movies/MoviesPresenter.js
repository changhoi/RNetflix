import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Loading from '../../components/Loader';
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import { BG_COLOR } from '../../constants/Color';
import Section from '../../components/Section';
import MovieItems from '../../components/Items';

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
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItems
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular" horizontal={false}>
          {popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItems
                overview={movie.overview}
                horizontal={true}
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
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
