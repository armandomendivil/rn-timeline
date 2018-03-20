import { TabNavigator, StackNavigator } from 'react-navigation';
import { TabNavigatorOptions, StackNavigatorOptions } from './components/Navigation';
import Timeline from './Timeline';

const tabs = [
  { key: 'Timeline', label: 'Timeline', icon: 'home' },
];

const SocialTabNavigator = TabNavigator({
  Timeline: { screen: Timeline },
}, TabNavigatorOptions(tabs));

export const SocialNavigator = StackNavigator({
  Home: { screen: SocialTabNavigator },
}, StackNavigatorOptions);
