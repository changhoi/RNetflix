import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import makePhotoUri from '../utils/makePhotoUri';

const Image = styled.Image`
  width: 110;
  height: 160;
  border-radius: 2.5px;
`;

const MoviePoster = ({ path }) => (
  <Image source={{ uri: makePhotoUri(path) }} />
);

Image.propTypes = {
  path: PropTypes.string
};

export default MoviePoster;
