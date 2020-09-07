import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = () => {
  return (
    <View style={styles.root}>
     <Button icon={require('../images/virus.png')} style={styles.btn}>

     </Button>
     <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  btn: {
      width: 200,
      height: 250,
      color: "red",
      backgroundColor: "red"
  }
});

export default SplashScreen;
