import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, Image, View, SafeAreaView, Alert, } from 'react-native';
import axios from 'axios';
import Color from 'color';



const EmailForm = ({ buttonText, children, onAuthentication, navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showing, setShowing] = useState(false);
  // const [goHome, setHome] = useState(false);

  async function submit (e) {
    e.preventDefault()
    console.log(email)
    console.log(password)
    axios.post("http://192.168.0.8:5000/api/auth/login", { 
            email: email,
            password: password
        })
        .then(response => {
            console.log(response.data)
            setLoggedIn(true)
            setShowing(true)
            // setHome(true)
        })
        .catch(error => {
            console.log(error.response.data)
            setLoggedIn(false)
            setShowing(true)
        })

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
      
    </ScrollView>
    {showing ? <Text>{loggedIn ?  <Text style={styles.loginmsg}>Success!!</Text> : <Text style={styles.errormsg}> Your username or Password did not match please try again! </Text> } </Text> : null}
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
    textAlign: 'center',
    backgroundColor: 'lightgreen'
  },
  errormsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'red'
  }

});

export default EmailForm;

