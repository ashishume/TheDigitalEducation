import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostsList from '../components/PostsList';
import Content from '../components/Content';
import Style from '../components/Styles';
import DrawerNavigation from './DrawerNavigation';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Icon} from '@ant-design/react-native';

const Stack = createStackNavigator();
const MainRouting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
          name="Dashboard"
        />
        <Stack.Screen
          name="PostsList"
          component={PostsList}
          options={{...headerStyles}}
        />
        <Stack.Screen
          name="Content"
          options={{...headerStyles}}
          component={Content}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const headerStyles = {
  headerTitleStyle: {
    ...Style.fontFamily,
    marginLeft: -15,
    paddingLeft: 0,
  },
  headerStyle: {
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
    },
    elevation: 10,
    shadowRadius: 5,
  },
  headerRight: () => (
    <Image
      style={{height: 50, width: 50}}
      source={require('../assets/logo.jpg')}
    />
  ),
};

export default MainRouting;
