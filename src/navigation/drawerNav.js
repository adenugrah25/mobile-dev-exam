import React from 'react'
import { Button } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer'

//import screen
import Home from '../screen/home'
import Profile from '../screen/profile';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Home} />
            <Drawer.Screen name="Account" component={Profile} />
            
        </Drawer.Navigator>
    )
}

export default DrawerNav;