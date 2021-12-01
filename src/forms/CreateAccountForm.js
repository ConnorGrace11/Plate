import React, { useState } from 'react'
import {
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

const CreateAccountForm = ({
  buttonText,
  children,
  onAuthentication,
  navigation,
}) => {
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [username, onChangeUsername] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [showing, setShowing] = useState(false)

  async function submit(e) {
    e.preventDefault()
    console.log(email)
    console.log(password)
    axios
      .post('http://143.198.25.164:5000/api/auth/signup', {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
        setLoggedIn(true)
        setShowing(true)
        // setHome(true)
      })
      .catch((error) => {
        console.log(error.response.data)
        setErrorMessage(error.response.data.message)
        setLoggedIn(false)
        setShowing(true)
      })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('./plate.png')} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Passcode"
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title={buttonText} onPress={submit} />
      </ScrollView>
      {showing ? (
        <Text>
          {loggedIn ? (
            <Text style={styles.loginmsg}>
              Account Created!! Please return to the login page to sign in!
            </Text>
          ) : (
            <Text style={styles.errormsg}> Error: {errorMessage} </Text>
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

export default CreateAccountForm
