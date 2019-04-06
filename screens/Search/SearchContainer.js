import SearchPresenter from './SearchPresenter';
import React from 'react';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movieResults: null,
      tvResults: null,
      searchTerm: ''
    };
  }

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      alert('searching');
      return;
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
