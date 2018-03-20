import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StackNavigatorOptions } from './src/components/Navigation';
import { SocialNavigator } from './src/Main';

const onNavigationStateChange = () => undefined;

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator { ...{onNavigationStateChange} }/>
    );
  }
}

const MainNavigator = StackNavigator({
  Social: { screen: SocialNavigator },
}, StackNavigatorOptions);
