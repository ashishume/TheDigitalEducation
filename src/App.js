import React, {Component, Fragment} from 'react';
import BannerAd from './components/Ads/BannerAds';
import MainRouting from './Routes/MainRouting';
import LoaderComponent from './components/LoaderComponent';
// import messaging from '@react-native-firebase/messaging';

class App extends Component {
  // componentDidMount() {
  //   this.checkPermission();
  // }

  // async checkPermission() {
  //   const settings = await messaging().requestPermission();
  //   if (settings) {
  //     console.log('Permission settings:', settings);
  //   }
  // }

  render() {
    return (
      <Fragment>
        <LoaderComponent />
        <MainRouting />
        {/* <BannerAd /> */}
      </Fragment>
    );
  }
}

export default App;

// ./gradlew bundleRelease
