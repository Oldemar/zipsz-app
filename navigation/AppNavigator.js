import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from './Screens';
import Auth from './Auth';
import {inject, observer} from "mobx-react";

export default
    observer(
        createAppContainer(
            createSwitchNavigator({
                Auth,
                Screens,
            },{
                initialRouteName: store.UserStore.loggedIn ? 'Screens':'Auth'
            })
        )
);
