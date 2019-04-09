import React from 'react';
import { Text } from 'react-native';
import DetailPresenter from './DetailPresenter';
import PropTypes from 'prop-types';
import { movieApi, tvApi } from '../../api';

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
          }
        }
      }
    } = props;
    this.state = {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading: true
    };
  }

  async componentDidMount() {
    const { isMovie, id } = this.state;
    let error, genres, status, date;
    try {
      if (isMovie) {
        ({
          data: { genres, status, release_date: date }
        } = await movieApi.movieDetail(id));
      } else {
        ({
          data: { genres, status, first_air_date: date }
        } = await tvApi.showDetail(id));
      }
    } catch (e) {
      console.log(e);
      error = '정보를 불러올 수 없습니다.';
    } finally {
      this.setState({ loading: false, error, genres, status, date });
    }
  }

  render() {
    const {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading,
      date,
      genres,
      status
    } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        genres={genres}
        date={date}
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
        isMovie={isMovie}
        loading={loading}
        status={status}
      />
    );
  }
}
