import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Loading from '../../components/Loader';
import styled from 'styled-components';
import Section from '../../components/Section';
import { BG_COLOR } from '../../constants/Color';
import TVItems from '../../components/Items';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({
  loading,
  popular,
  topRated,
  airingToday,
  airingThisWeek
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <TVItems
                isMovie={false}
                backgroundPhoto={tv.backdrop_path}
                overview={tv.overview}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {airingThisWeek ? (
        <Section title="Airing This Week">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <TVItems
                backgroundPhoto={tv.backdrop_path}
                overview={tv.overview}
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {topRated ? (
        <Section title="Top Rated">
          {topRated
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <TVItems
                backgroundPhoto={tv.backdrop_path}
                overview={tv.overview}
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <TVItems
                backgroundPhoto={tv.backdrop_path}
                overview={tv.overview}
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresenter.propTyeps = {
  loading: PropTypes.bool.isRequired,
  topRated: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
