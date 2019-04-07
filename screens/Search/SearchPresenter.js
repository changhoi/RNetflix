import Loading from '../../components/Loader';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, GREY_COLOR } from '../../constants/Color';
import Layout from '../../constants/Layout';
import Section from '../../components/Section';
import Items from '../../components/Items';

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: #a39e9e;
  width: ${Layout.width / 1.3};
  border-radius: 10px;
  padding: 5px 10px;
`;

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

const Text = styled.Text`
  color: white;
  margin: 10px;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing
}) => (
  <Container>
    <InputContainer>
      <Input
        placeholderTextColor={GREY_COLOR}
        placeholder="Search Movies and TV"
        keyboardAppearance="dark"
        returnKeyType="search"
        value={searchTerm}
        onChangeText={handleSearchUpdate}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={false}
      />
    </InputContainer>
    <SearchResults>
      {loading ? (
        <Loading />
      ) : movieResults && tvResults ? (
        movieResults.length && tvResults.length ? (
          <>
            <Section title="Movies">
              {movieResults
                .filter(movie => movie.poster_path !== null)
                .map(movie => (
                  <Items
                    key={movie.id}
                    id={movie.id}
                    posterPhoto={movie.poster_path}
                    title={movie.title}
                    voteAvg={movie.vote_average}
                  />
                ))}
            </Section>
            <Section title="TV">
              {tvResults
                .filter(tv => tv.poster_path !== null)
                .map(tv => (
                  <Items
                    key={tv.id}
                    id={tv.id}
                    posterPhoto={tv.poster_path}
                    title={tv.name}
                    voteAvg={tv.vote_average}
                  />
                ))}
            </Section>
          </>
        ) : movieResults.length ? (
          <Section title="Movies">
            {movieResults
              .filter(movie => movie.poster_path !== null)
              .map(movie => (
                <Items
                  key={movie.id}
                  id={movie.id}
                  posterPhoto={movie.poster_path}
                  title={movie.title}
                  voteAvg={movie.vote_average}
                />
              ))}
          </Section>
        ) : tvResults.length ? (
          <Section title="TV">
            {tvResults
              .filter(tv => tv.poster_path !== null)
              .map(tv => (
                <Items
                  key={tv.id}
                  id={tv.id}
                  posterPhoto={tv.poster_path}
                  title={tv.name}
                  voteAvg={tv.vote_average}
                />
              ))}
          </Section>
        ) : (
          <Text>Can't find anything</Text>
        )
      ) : null}
    </SearchResults>
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;
