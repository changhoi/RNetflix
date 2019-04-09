import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, TINT_COLOR, ACTIVE_COLOR } from '../../constants/Color';
import Layout from '../../constants/Layout';
import MovieRating from '../../components/MovieRating';
import makePhotoUrl from '../../utils/makePhotoUri';
import MoviePoster from '../../components/MoviePoster';
import { LinearGradient } from 'expo';
import { Platform } from 'react-native';
import Loading from '../../components/Loader';
const DetailPresenter = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  loading,
  isMovie,
  genres,
  date,
  status
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <LinearGradient
        colors={['transparent', 'black']}
        start={Platform.select({
          ios: [0, 0]
        })}
        end={Platform.select({
          ios: [0, 0.5],
          android: [0, 0.9]
        })}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
            {voteAvg ? <MovieRating votes={voteAvg} inSlide={true} /> : null}
          </Column>
        </Content>
      </LinearGradient>
    </Header>
    <DetailContent>
      {loading ? <Loading /> : null}
      <DetailValue title="Overview" text={overview} />
      <DetailValue title="Status" text={status} />
      <DetailValue
        title={isMovie ? 'Release Date' : 'First Air Date'}
        text={date}
      />
      <DetailValue title="Genres" text={genres} />
    </DetailContent>
  </Container>
);

const DetailValue = ({ title, text }) =>
  text ? (
    typeof text !== 'string' && text.length !== 0 ? (
      <>
        <ContentTitle>{title}</ContentTitle>
        <Row>
          {text.map((genre, index) => (
            <ContentText key={index}>{genre.name} </ContentText>
          ))}
        </Row>
      </>
    ) : (
      <>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{text}</ContentText>
      </>
    )
  ) : null;

const Title = styled.Text`
  color: ${ACTIVE_COLOR};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
  align-items: flex-start;
`;

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const ContentText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 16;
  margin-bottom: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  width: ${Layout.width};
  height: ${Layout.height / 4};
  justify-content: center;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 4};
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 30px;
  padding-vertical: 20px;
  justify-content: space-between;
`;

const DetailContent = styled.View`
  padding-horizontal: 20px;
  margin-top: 25px;
`;

const ContentTitle = styled.Text`
  color: ${TINT_COLOR};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Row = styled.View`
  flex-direction: row;
`;

export default DetailPresenter;

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired
};
