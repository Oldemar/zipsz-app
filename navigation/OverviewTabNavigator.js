import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from "../components/TabBarIcon";
import Overview from "../screens/Overview";
import Wallet from "../screens/Wallet";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const OverviewStack = createStackNavigator(
    {
        OverView: Overview,
    },
    config
);

OverviewStack.navigationOptions = {
    tabBarLabel: 'Overview',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-business${focused ? '' : '-outline'}`
                    : 'md-business'
            }
        />
    ),
};

OverviewStack.path = '';

const WalletStack = createStackNavigator(
    {
        Wallet: Wallet,
    },
    config
);

WalletStack.navigationOptions = {
    tabBarLabel: 'Wallet',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-wallet'
                    : 'md-wallet'
            }
        />
    ),
};

WalletStack.path = '';

const tabNavigator = createBottomTabNavigator({
    OverviewStack,
    WalletStack,
});

tabNavigator.path = '';

export default tabNavigator;
