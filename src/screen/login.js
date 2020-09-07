import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { LoginAction } from '../action'

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { user } = useSelector((state) => {
    return {
        user: state.userReducer.username,
    };
});

  const dispatch = useDispatch();

  const handleLogin = () => {
    const body = {
        username: username,
        password: password,
    };
    console.log('form : ', username, password);
    dispatch(LoginAction(body));
    setUsername('');
    setPassword('');
};

  return (
    <View style={styles.root}>
      <Text>Login Screen</Text>
      <TextInput
      label="Username"
      value={username}
      onChangeText={value => setUsername(value)}
    />
    <TextInput
      label="Password"
      value={password}
      onChangeText={value => setPassword(value)}
    />
    <Button onPress={handleLogin} mode="contained" style={styles.loginbtn}>
      Login
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  loginbtn: {
    // color: "red",
    backgroundColor: 'red'
  }
});

export default LoginScreen;
