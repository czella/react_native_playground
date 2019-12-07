import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';

const activeColor = '#4775f2';
const inActiveColor = '#b8bece';

const HomeStack = createStackNavigator({
  Home: MainScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'SVG',
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  MapStack,
});

export default TabNavigator;
