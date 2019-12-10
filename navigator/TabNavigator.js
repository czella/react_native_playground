import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import ChartScreen from '../screens/ChartScreen';

const activeColor = '#4775f2';
const inActiveColor = '#b8bece';

const HomeStack = createStackNavigator(
  {
    Home: MainScreen,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'SVG',
};

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
};

const ChartStack = createStackNavigator(
  {
    Chart: ChartScreen,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

ChartStack.navigationOptions = {
  tabBarLabel: 'Chart',
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  MapStack,
  ChartStack,
});

export default TabNavigator;
