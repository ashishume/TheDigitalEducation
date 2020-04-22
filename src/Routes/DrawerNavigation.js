import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainPage from '../components/MainPage';
import PrivacyPolicy from '../components/UI/PrivacyPolicy';

class DrawerNavigation extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={MainPage} />
        <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
