import 'react-native-get-random-values';
import React, {Fragment, Component} from 'react';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import AnimatedLoader from 'react-native-animated-loader';

class webView extends Component {
  state = {
    isLoading: false,
  };

  handleWebViewNavigationStateChange = props => {
    this.setState({
      isLoading: props.loading,
    });
  };

  render() {
    return (
      <Fragment>
        {Platform.OS === 'android' && <StatusBar barStyle="light-content" />}
        <AnimatedLoader
          visible={this.state.isLoading}
          overlayColor="rgba(255,255,255,0.75)"
          animationStyle={styles.lottie}
          source={require('../assets/loading.json')}
          speed={1}
        />

        <WebView
          source={{uri: 'https://www.thedigi.live/'}}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
export default webView;
