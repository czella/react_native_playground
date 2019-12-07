import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
    Map: MapScreen,
  },
  {
    mode: 'modal',
  },
);

export default createAppContainer(TabNavigator);
