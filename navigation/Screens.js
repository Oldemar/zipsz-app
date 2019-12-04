import React from 'react';

import {createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Deliver from '../screens/Deliver'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import MenuDrawer from "../components/MenuDrawer";
import Order from "../screens/Order";
import User from "../screens/User";
import Driver from "../screens/Driver";
import Logoff from "../screens/Logoff";
import {Platform} from "react-native";
import OverviewTabNavigator from "./OverviewTabNavigator";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const DrawerConfig = {
    drawerWidth: store.AppStore.WIDTH*0.8,
    contentComponent:({navigation})=>{
        return(
            <MenuDrawer navigation={navigation}/>
        )
    }
};

const DeliverStack = createStackNavigator(
    {
        Deliver: Deliver,
    },
    config
);

export default createDrawerNavigator(
    {
        Overview: OverviewTabNavigator,
        Deliver: {
            screen: DeliverStack,
        },
        Profile,
        Settings,
        Order,
        User,
        Driver,
        Logoff,
    },
        DrawerConfig
);
