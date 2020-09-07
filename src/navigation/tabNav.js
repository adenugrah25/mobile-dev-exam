import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

//import screen 
import Home from '../screen/home';
import DrawerNav from '../navigation/drawerNav';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const tabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="drawer-nav" component={DrawerNav} />
        </Tab.Navigator>
    )
}

export default tabNav;


