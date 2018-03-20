import * as React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, SafeAreaView } from 'react-native';

import { NavigationProps } from './Navigation';


export const Tab = {
  key: '',
  label: '',

};

export const Tabs = Tab;

export const TabBarProps = NavigationProps & {
  tabs: Tabs
};

export default class TabBar extends React.Component {

    navigate(key) {
        const {tabs, navigation} = this.props;
        const activeKey = tabs[navigation.state.index].key;
        if (activeKey !== key) {
            navigation.navigate(key);
        }
    }

    render() {
        const {tabs, navigation} = this.props;
        const activeKey = tabs[navigation.state.index].key;
        return (
            <SafeAreaView style={styles.root}>
                <View style={styles.tabs}>
                    {
                        tabs.map(tab => (
                            <TouchableWithoutFeedback key={tab.key} onPress={() => this.navigate(tab.key)}>
                                <View style={styles.tab}>
                                   
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    root: {

    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",

    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
});
