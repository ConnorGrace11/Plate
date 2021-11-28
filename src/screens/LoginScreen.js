import React, { useState } from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Image,
  View,
  SafeAreaView,
  Alert,
} from 'react-native'
import axios from 'axios'
import Color from 'color'
import { useNavigation } from '@react-navigation/native'
import deviceStorage from '../api/token'

const EmailForm = ({ buttonText, children, onAuthentication, navigation }) => {
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [token, setToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [showing, setShowing] = useState(false)
  // const [goHome, setHome] = useState(false);

  async function submit(e) {
    e.preventDefault()
    console.log(email)
    console.log(password)

    axios
      .post('http://172.16.224.93:5000/api/auth/login', {
        //192.168.0.8
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
        setToken(response.data.token)
        console.log(token)
        deviceStorage.saveItem('token', response.data.token)
        setIsLoggedIn(response.data.status)
        console.log(isLoggedIn)
        setLoggedIn(true)
        navigation.navigate('Home')
        setShowing(true)
      })
      .catch((error) => {
        console.log(error.response.data)
        setErrorMessage(error.response.data.error)
        setLoggedIn(false)
        setShowing(true)
      })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../forms/plate.png')} />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry
          autoCapitalize="none"
        />
        <Button title={'Log In'} onPress={submit} />
      </ScrollView>
      {showing ? (
        <Text>
          {loggedIn ? (
            <Text style={styles.loginmsg}>Success!!</Text>
          ) : (
            <Text style={styles.errormsg}> Error! {errorMessage} </Text>
          )}{' '}
        </Text>
      ) : null}
    </>
  )
}
//   return (
//     <>
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image style={styles.image} source={require("./plate.png")} />
//       <TextInput
//         placeholder="E-mail"
//         style={styles.input}
//         onChangeText={(text) => onChangeEmail(text)}
//         value={email}
//         keyboardType="email-address"
//       />
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         onChangeText={(text) => onChangePassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <Button title={buttonText} onPress={submit} />
//
//     </ScrollView>
//     {showing ? <Text>{loggedIn ?  <Text style={styles.loginmsg}>Success!!</Text> : <Text style={styles.errormsg}> Error! {errorMessage} </Text> } </Text> : null}
//     </>
//
//   );
//
// };

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
    marginBottom: 20,
  },
  image: {
    marginBottom: 20,
  },
  loginmsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'lightgreen',
  },
  errormsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'red',
  },
})

export default EmailForm
// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, onPress, ScrollView, ScrollViewComponent, StyleSheet} from 'react-native';
// import EmailForm from '../forms/EmailForm';
//
// const LoginScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//     <EmailForm
//       buttonText="Log in!!"
//     >
//     </EmailForm>
//     <Button
//       onPress={() => navigation.navigate('Home')}
//       title="Home"
//       color="#841584"
//
//     />
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lightblue'
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginTop: 20,
//     marginBottom: 20
//   },
//   image: {
//     marginBottom: 20,
//   },
//   loginmsg: {
//     marginTop: 20,
//     textAlign: 'center',
//     backgroundColor: 'lightgreen'
//   },
//   errormsg: {
//     marginTop: 20,
//     textAlign: 'center',
//     backgroundColor: 'red'
//   }
//
// });
// export default LoginScreen;
