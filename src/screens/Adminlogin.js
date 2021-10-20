import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmailForm from '../forms/EmailForm';
import { View, Text, Button, TouchableOpacity } from 'react-native';
const Adminlogin = ({ navigation }) => {
    return (
      <EmailForm
        buttonText="Log in"
        onSubmit={login}
        onAuthentication={() => navigation.navigate('Adhome')}
      >
        <Button
          title="Go Back"
          onPress={() => navigation.navigate('Home')}
        />
      </EmailForm>
    );
  };
  export default Adminlogin;
  