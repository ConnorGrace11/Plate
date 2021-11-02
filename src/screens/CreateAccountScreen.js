import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import EmailForm from '../forms/EmailForm'

const CreateAccount = ({ navigation }) => {
  return (
    <CreateAccount
      buttonText="Sign up"
      //onSubmit={createAccount}
      //onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </CreateAccount>
  )
}

export default CreateAccount
