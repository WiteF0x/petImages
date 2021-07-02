import React from 'react';
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Loading from 'src/components/Loader';

import store, { persistor } from './redux';
import RootNavigator from './navigation';
import ApiProvider from './utils/apiProvider';
import AlertProvider from './utils/AlertProvider';

LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store} >
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <ApiProvider store={store}>
        <AlertProvider>
          <Loading/>
          <RootNavigator/>
        </AlertProvider>
      </ApiProvider>
    </PersistGate>
  </Provider>
);
export default App;

