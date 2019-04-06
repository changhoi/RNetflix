import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  margin-vertical: 20px;
`;
const ScrollView = styled.ScrollView``;
const Title = styled.Text`
  margin-bottom: 10px;
  font-weight: 600;
  color: white;
  padding-left: 20px;
`;

const Section = ({ children, title, horizontal = true }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={horizontal}>{children}</ScrollView>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  horizontal: PropTypes.bool
};

export default Section;
