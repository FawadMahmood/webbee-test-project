import { LogBox } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper'
import { AppNavigator } from './src/app';
import { configureDesignSystem } from './src/utils/designSystem';
import { initServices, ServicesProvider } from './src/services';
import { Provider } from 'react-redux';
import { persistor, store } from './src/stores';

LogBox.ignoreLogs([
  'EventEmitter.removeListener',
  '`new NativeEventEmitter()`',
  '[react-native-gesture-handler] Seems like', // https://github.com/software-mansion/react-native-gesture-handler/issues/1831
]);

export default (): JSX.Element => {
  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    await initServices();

    configureDesignSystem();

    setReady(true);
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <ServicesProvider>
            <PaperProvider>
              {ready ? <AppNavigator /> : null}
            </PaperProvider>
          </ServicesProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};
