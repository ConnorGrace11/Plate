import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import EmailForm from '../forms/EmailForm';

const mainScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
    <Button title="Login screen!" onPress={() => navigation.navigate('Login')}/>
    <Button title="Create account" onPress={() => navigation.navigate('CreateAccount')}/>
    <Button title="Adminlogin" onPress={() => navigation.navigate('Adminlogin')}/>
    </SafeAreaView>
  
  );
};

export default mainScreen;
