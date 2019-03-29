import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => (
  <>
    <SafeAreaView>
      <Text>Movies</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text> Go to Detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </>
);
