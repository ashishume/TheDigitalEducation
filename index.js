import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/Store/ConfigureStore';

const store = configureStore();
const AppIndex = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppIndex);
