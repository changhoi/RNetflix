import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieRating from './MovieRating';
import MoviePoster from './MoviePoster';
import { GREY_COLOR } from '../constants/Color';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  width: 110px;
  margin-horizontal: 5px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (props.big ? 16 : 14)};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 10px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 10px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 13;
`;

const MovieItems = ({
  navigation,
  isMovie = true,
  id,
  overview,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false
}) =>
  horizontal ? (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail')}>
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          {overview ? <Overview numberOfLines={6}>{overview}</Overview> : null}
        </Column>
      </HContainer>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', { isMovie, id })}
    >
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>{title}</Title>
        <MovieRating votes={voteAvg} />
      </Container>
    </TouchableWithoutFeedback>
  );

export default withNavigation(MovieItems);

MovieItems.propTypes = {
  // id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string,
  isMovie: PropTypes.bool
};
