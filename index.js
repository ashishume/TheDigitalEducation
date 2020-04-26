import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React, {useEffect, Fragment} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/Store/ConfigureStore';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
// import messaging from '@react-native-firebase/messaging';

const store = configureStore();
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
const AppIndex = () => (
  <Fragment>
    {useEffect(() => {
      SplashScreen.hide();

      // const unsubscribe = messaging().onMessage(async remoteMessage => {
      //   Alert.alert(
      //     'A new FCM message arrived!',
      //     JSON.stringify(remoteMessage),
      //   );
      // });

      // return unsubscribe;
    })}
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
);

AppRegistry.registerComponent(appName, () => AppIndex);
