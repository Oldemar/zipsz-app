import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Forgot from '../screens/Forgot'
import {Platform} from "react-native";

export default createStackNavigator({
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
    Forgot: {
        screen: Forgot,
    },
},{
    defaultNavigationOptions: {
        header: null,
    }
})

