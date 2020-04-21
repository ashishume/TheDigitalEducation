import React, {Component, Fragment} from 'react';
import SplashScreen from 'react-native-splash-screen';
import http from './API/HttpService';
import {StyleSheet} from 'react-native';
import {loading} from './Store/Actions/loader';
import {connect} from 'react-redux';

import BannerAd from './components/Ads/BannerAds';
import {AdMobInterstitial} from 'react-native-admob';
import env from './environment/env';
import 'react-native-gesture-handler';
import MainRouting from './Routes/MainRouting';
import Loader from './components/UI/Loader';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    const self = this;

    http.interceptors.request.use(
      request => {
        self.props.loading(true);
        return request;
      },
      error => {
        self.props.loading(false);

        return Promise.reject(error);
      },
    );

    http.interceptors.response.use(
      response => {
        self.props.loading(false);
        return response;
      },
      error => {
        self.props.loading(false);
        return Promise.reject(error);
      },
    );
  }

  render() {
    setTimeout(function() {
      AdMobInterstitial.setAdUnitID(env.InterId);
      AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
      AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }, 5000);

    return (
      <Fragment>
        {this.props.loader ? <Loader /> : null}
        <MainRouting />
        <BannerAd />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: state.loader,
  };
};
export default connect(
  mapStateToProps,
  {loading},
)(App);

// ./gradlew assembleRelease
