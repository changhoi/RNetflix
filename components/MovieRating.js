import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TINT_COLOR, GREY_COLOR } from '../constants/Color';

const Vote = styled.Text`
  color: ${props => (props.inSlide ? TINT_COLOR : GREY_COLOR)};
  font-size: ${props => (props.inSlide ? 14 : 12)};
  font-weight: 600;
  margin-bottom: 10;
`;

const MovieRating = ({ votes, inSlide = false }) => (
  <Vote inSlide={inSlide}>{`⭐️ ${votes} / 10`}</Vote>
);

MovieRating.propTypes = {
  votes: PropTypes.number.isRequired,
  inSlide: PropTypes.bool
};

export default MovieRating;
