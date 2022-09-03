//Login Screen that users will use to login
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
  TouchableOpacity,

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

  const AppButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
  );
  
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
        console.log(error)
        setErrorMessage(error)
        setLoggedIn(false)
        setShowing(true)
      })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../forms/plate.png')} />
        <View style={styles.inputView} color="#00BFFF">
          <TextInput
            placeholder="E-mail"
            style={styles.TextInput}
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            style={styles.TextInput}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <View>
          <AppButton title="Login" onPress={submit} size="sm" backgroundColor="#007bff" />
          <AppButton title="Create Account" onPress={() => navigation.navigate('CreateAccount')} size="sm" backgroundColor="#007bff" />
        </View>

      </ScrollView>
        {showing ? <Text>{loggedIn ?  <Text style={styles.loginmsg}>Success</Text> : <Text style={styles.errormsg}> Error: Incorrect Email or Password </Text> } </Text> : null}
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  }, body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    position: 'absolute',
    top: 500,
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
    width: 130,
    height: 130,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,

  },
  errormsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  inputView: {
    textAlign: 'center',
    backgroundColor: "#00BFFF",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    backgroundColor: '#00BFFF',
    width: "70%",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    },
   appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
})

export default EmailForm
