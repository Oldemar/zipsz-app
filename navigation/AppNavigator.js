import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth';
import { observer} from "mobx-react";
import Screens from "./Screens";

export default
    observer(
        createAppContainer(
            createSwitchNavigator({
                Auth,
                Screens,
            },{
                initialRouteName: 'Auth'
            })
        )
);
