import React, {Component, Fragment} from 'react';
import BannerAd from './components/Ads/BannerAds';
import MainRouting from './Routes/MainRouting';
import LoaderComponent from './components/LoaderComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <LoaderComponent />
        <MainRouting />
        <BannerAd />
      </Fragment>
    );
  }
}

export default App;

// ./gradlew bundleRelease
