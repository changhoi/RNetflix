import SearchPresenter from './SearchPresenter';
import React from 'react';
import { movieApi, tvApi } from '../../api';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movieResults: null,
      tvResults: null,
      searchTerm: '',
      error: null
    };
  }

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      let loading, movieResults, tvResults, error;
      this.setState({
        loading: true
      });
      try {
        ({
          data: { results: movieResults }
        } = await movieApi.search(searchTerm));
        ({
          data: { results: tvResults }
        } = await tvApi.search(searchTerm));
      } catch (e) {
        console.log(e);
        error = "Can't search a thing";
      } finally {
        this.setState({ loading: false, movieResults, tvResults, error });
      }
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
