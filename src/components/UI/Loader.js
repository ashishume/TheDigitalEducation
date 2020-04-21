import React, {Component} from 'react';
import 'react-native-get-random-values';
import {StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
class Loader extends Component {
  render() {
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        source={require('../../assets/loading.json')}
        speed={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
export default Loader;
