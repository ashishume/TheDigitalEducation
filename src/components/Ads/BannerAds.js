import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {PublisherBanner} from 'react-native-admob';
import environment from '../../environment/env';
const BannerAd = () => {
  return (
    <Fragment>
      <PublisherBanner
        adSize="smartBannerPortrait"
        adUnitID={environment.BannerId}
        testDevices={[PublisherBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
        onAppEvent={event => console.log(event.name, event.info)}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 5,
  },
});

export default BannerAd;
