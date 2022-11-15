import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './screens';
import { useServices } from './services';

export const AppNavigator = (): JSX.Element => {
  useColorScheme();
  const { nav } = useServices();

  return (
    <NavigationContainer ref={nav.n}>
      <RootNavigation />
    </NavigationContainer>
  );
};
