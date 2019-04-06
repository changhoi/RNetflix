import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TINT_COLOR, BG_COLOR } from '../constants/Color';
import styled from 'styled-components';

const Loading = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${BG_COLOR};
`;

export default () => (
  <Loading>
    <ActivityIndicator color={TINT_COLOR} />
  </Loading>
);
