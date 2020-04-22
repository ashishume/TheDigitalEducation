import React, {Component, Fragment} from 'react';
import {StyleSheet, Share, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchContent} from '../Store/Actions/Index';
import {WebView} from 'react-native-webview';
import Style from '../components/Styles';
import SharePost from './UI/SharePost';
// import {AdMobInterstitial} from 'react-native-admob';
// import env from '../environment/env';

class Content extends Component {
  renderShare = url => {
    Share.share(
      {
        message: `Checkout this awesome post ${url}`,
        url: url,
        title: 'Checkout this awesome post',
      },
      {
        dialogTitle: 'Share this post',
      },
    );
  };

  componentDidMount() {
    // setTimeout(function() {
    //   AdMobInterstitial.setAdUnitID(env.InterId);
    //   AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    //   AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    // }, 5000);
    this.props.fetchContent(this.props.route.params.postId);
  }

  render() {
    const data = this.props.content;
    return (
      <Fragment>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>{data.title}</Text>
          </View>
          <View style={styles.sharePost}>
            <SharePost url={data.url} style={'#000'} />
          </View>
        </View>
        <WebView
          source={{html: data.content}}
          style={styles.webView}
          scalesPageToFit={false}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
    ...Style.fontFamily,
  },
  headingContainer: {
    flex: 5,
  },
  sharePost: {
    flex: 1,
  },
  webView: {
    height: 10,
    width: '100%',
    alignSelf: 'center',
  },
});
const mapStateToProps = state => {
  return {
    content: state.posts.content,
  };
};
export default connect(
  mapStateToProps,
  {fetchContent},
)(Content);
