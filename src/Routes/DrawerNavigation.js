import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainPage from '../components/MainPage';

class DrawerNavigation extends Component {
  render() {
    console.log(this.props);
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen
          navigationOptions={{drawerLabel: 'Settings'}}
          name="Dashboard"
          component={MainPage}
        />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
