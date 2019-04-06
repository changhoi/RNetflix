import React from 'react';
import MoviesPresenter from './MoviesPresenter';
import { movieApi } from '../../api';
export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await movieApi.upcoming());
      ({
        data: { results: popular }
      } = await movieApi.popular());
      ({
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying());
    } catch (e) {
      console.log(e);
      error = "Can't get any movies";
    } finally {
      this.setState({ loading: false, error, upcoming, nowPlaying, popular });
    }
  }

  render() {
    const { loading, error, upcoming, popular, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowPlaying={nowPlaying}
        error={error}
      />
    );
  }
}
