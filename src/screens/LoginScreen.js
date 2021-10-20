import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, onPress, ScrollView, ScrollViewComponent} from 'react-native';
import { login } from '../api/mock';
import EmailForm from '../forms/EmailForm';

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
    <EmailForm
      buttonText="Log in!!"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
    </EmailForm>
    </ScrollView>
  );
};

export default LoginScreen;
