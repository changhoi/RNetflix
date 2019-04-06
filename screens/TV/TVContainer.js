import TVPresenter from './TVPresenter';
import React from 'react';
import Loading from '../../components/Loader';
import { tvApi } from '../../api';
import { Text } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      popular: null,
      topRated: null,
      airingToday: null
    };
  }

  async componentDidMount() {
    let popular, topRated, airingToday, airingThisWeek, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.popular());
      ({
        data: { results: topRated }
      } = await tvApi.topRated());

      ({
        data: { results: airingToday }
      } = await tvApi.airingToday());
      ({
        data: { results: airingThisWeek }
      } = await tvApi.airingThisWeek());
    } catch (e) {
      console.log(e);
      error = "Can't get TV";
    } finally {
      this.setState({
        loading: false,
        popular,
        topRated,
        airingToday,
        error,
        airingThisWeek
      });
    }
  }

  render() {
    const {
      loading,
      airingThisWeek,
      topRated,
      airingToday,
      popular,
      error
    } = this.state;
    return (
      <TVPresenter
        popular={popular}
        loading={loading}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        airingThisWeek={airingThisWeek}
      />
    );
  }
}
