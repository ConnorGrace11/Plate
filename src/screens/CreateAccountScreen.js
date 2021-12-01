import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, TextInput, Button, Text, Image, View, SafeAreaView, Alert, } from 'react-native';
import axios from 'axios';
import Color from 'color';



const CreateAccountScreen = ({ buttonText, children, onAuthentication, navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [username, onChangeUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showing, setShowing] = useState(false);

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

  async function submit (e) {
    e.preventDefault()
    console.log(email)
    console.log(password)
    axios.post("http://143.198.25.164:5000/api/auth/signup", {
            email: email,
            username: username,
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
            setErrorMessage(error.response.data.message)
            setLoggedIn(false)
            setShowing(true)
        })

    }


  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("../forms/plate.png")} />
      <View style={styles.inputView} color="#00BFFF">
      <TextInput
        placeholder="E-mail"
        style={styles.TextInput}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder="Username"
        style={styles.TextInput}
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
        keyboardType="default"
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder="Password"
        style={styles.TextInput}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      </View>
      <AppButton title="Sign Up" onPress={submit} size="sm" backgroundColor="#007bff" />
      <AppButton title="Back to Login" onPress={() => navigation.navigate('Login')} size="sm" backgroundColor="#007bff" />

    </ScrollView>
    {showing ? <Text>{loggedIn ?  <Text style={styles.loginmsg}>Account Created!! Please return to the login page to sign in!</Text> : <Text style={styles.errormsg}> Error: {errorMessage} </Text> } </Text> : null}
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
   body: {
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
    width: 200,
    height: 200,
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
    backgroundColor: "#FF1493",
  },
  loginmsg: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
  },
  inputView: {
    textAlign: 'center',
    backgroundColor: "#00BFFF",
    borderRadius: 30,
    width: "50%",
    height: 45,
    marginBottom: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    backgroundColor: '#00BFFF',
    width: "50%",
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

});

export default CreateAccountScreen;

// import React, { useState } from 'react'
// import { View, Text, Button, TouchableOpacity } from 'react-native'
// import EmailForm from '../forms/EmailForm'
// import CreateAccountForm from '../forms/CreateAccountForm'

// const CreateAccount = ({ navigation }) => {
//   return (
//     <CreateAccountForm
//       buttonText="Sign up"
//     >
//       <Button
//         title="Back to log in"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </CreateAccountForm>
//   )
// }

// export default CreateAccount
