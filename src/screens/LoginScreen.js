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
      .post('http://143.198.25.164:5000/api/auth/login', {
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
      <SafeAreaView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../forms/plate.png')} />
        <View style={styles.body}>

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
          <Button 
          title="Log In"
          style={styles.loginmsg} 
          onPress={submit}
          color = 'black'
          backgroundColor = 'blue'/>
        </View>
        
      </SafeAreaView>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    position: 'absolute',
    top:500,
    left: 100
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 40
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  loginmsg: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
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
