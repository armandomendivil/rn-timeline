import React from 'react';
import { NavigationActions } from 'react-navigation';
import TabBar from './TabBar';

export class NavigationHelpers {
  static reset(navigation, routeName, key) {
    const action = NavigationActions.reset({
      index: 0,
      key,
      actions: [
        Navigation.navigate({ routeName }),
      ],
    });
    navigation.dispatch(action);
  }
};

export const StackNavigatorOptions = {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white',
  },
};

export const TabNavigatorOptions = (tabs) => ({
  animationEnabled: false,
  tabBarComponent: ({ navigation }) => <TabBar { ...{navigation, tabs} } />,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
});
