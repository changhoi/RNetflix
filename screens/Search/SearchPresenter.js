import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, GREY_COLOR } from '../../constants/Color';
import Layout from '../../constants/Layout';

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

const SearchResults = styled.ScrollView``;

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
