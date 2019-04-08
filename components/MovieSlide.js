import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import makePhotoUrl from '../utils/makePhotoUri';
import Layout from '../constants/Layout';
import MoviePoster from './MoviePoster';
import { ACTIVE_COLOR, GREY_COLOR, TINT_COLOR } from '../constants/Color';
import MovieRating from './MovieRating';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: space-between;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${ACTIVE_COLOR};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
  margin: 5px 0;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 12px;
`;

const MovieSlide = ({
  navigation,
  isMovie,
  posterPhoto,
  backgroundPhoto,
  id,
  title,
  overview,
  voteAvg
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        {voteAvg ? <MovieRating votes={voteAvg} inSlide={true} /> : null}
        {overview ? <Overview numberOfLines={9}>{overview}</Overview> : null}
        <BtnContainer
          onPress={() => navigation.navigate('Detail', { id, isMovie })}
        >
          <BtnText>More Detail</BtnText>
        </BtnContainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  isMovie: PropTypes.bool
};

export default withNavigation(MovieSlide);
