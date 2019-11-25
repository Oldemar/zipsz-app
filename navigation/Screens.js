import React from 'react';

import { createDrawerNavigator } from 'react-navigation';

import Deliver from '../screens/Deliver'
import Order from '../screens/Order'
import Overview from '../screens/Overview'
import Settings from '../screens/Settings'
import User from '../screens/User'

export default createDrawerNavigator({
    Overview,
    Deliver,
    Order,
    User,
    Settings,
},{
    header: null,
})
