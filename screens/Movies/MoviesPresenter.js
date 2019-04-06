import React from 'react';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Loading from '../../components/Loader';

const MoviesPresenter = ({
  navigation,
  loading,
  upcoming,
  popular,
  nowPlaying,
  error
}) => {
  if (loading) return <Loading />;
  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SafeAreaView>
        <Text>Movies</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text> Go to Detail</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default withNavigation(MoviesPresenter);

MoviesPresenter.propTyeps = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  nowPlaying: PropTypes.array.isRequired,
  error: PropTypes.string
};
