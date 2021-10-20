import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, onPress, ScrollView, ScrollViewComponent, StyleSheet} from 'react-native';
import EmailForm from '../forms/EmailForm';

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    <EmailForm
      buttonText="Log in!!"
    >
    </EmailForm>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  },
  image: {
    marginBottom: 20,
  },
  loginmsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'lightgreen'
  },
  errormsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'red'
  }

});
export default LoginScreen;
