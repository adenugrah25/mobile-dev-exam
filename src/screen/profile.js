// import React from 'react';
import React from 'react';

import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { logOutAction } from '../action';

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.root}>
        <Text>PROFILE SCREEN</Text>
        <Button onPress={() => dispatch(logOutAction())} mode="contained" style={styles.logoutbtn}>
      LOG OUT
    </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      padding: 10,
    },
    logoutbtn: {
      // color: "red",
      backgroundColor: 'red'
    }
  });

export default ProfileScreen;