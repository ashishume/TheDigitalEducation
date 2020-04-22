import React, {useEffect} from 'react';
import {Alert, View} from 'react-native';
const Notifications = () => {
  return <View />;
  // return useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);
};

export default Notifications;
