import React, {Component, Fragment} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PostsList from './PostsList';
import {Button, Icon} from '@ant-design/react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.menuContainer}>
          <View style={styles.leftItem}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <Icon name="menu" size="md" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightItem}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../assets/logo.jpg')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <PostsList {...this.props} />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingBottom: 50,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
    },
    elevation: 10,
    shadowRadius: 5,
  },
  leftItem: {marginLeft: 20},
  rightItem: {marginLeft: 300},
  icon: {
    color: '#000',
  },
});
export default MainPage;
