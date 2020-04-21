import React, {Fragment} from 'react';
import {PublisherBanner} from 'react-native-admob';
import environment from '../../environment/env';
const BannerAd = () => {
  const appId = '';
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

export default BannerAd;
