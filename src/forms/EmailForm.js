import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, Image, View } from 'react-native';
import { setToken } from '../api/token';

const EmailForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  async function submit () {
    console.log(email)
    console.log(password)
    try {
     
      await fetch('http://192.168.0.8:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })  
      },setErrorMessage(false));
    } catch(error) {
      console.log(error)
      setErrorMessage(true)
    }
  }

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("./plate.png")} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={submit} />
      {errorMessage ? <Text> success!!!! </Text> : <Text>this is incorrect!</Text> }
    </ScrollView>
    
    </> 
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default EmailForm;

