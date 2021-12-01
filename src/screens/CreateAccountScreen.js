import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import EmailForm from '../forms/EmailForm'
import CreateAccountForm from '../forms/CreateAccountForm'

const CreateAccount = ({ navigation }) => {
  return (
    <CreateAccountForm
      buttonText="Sign up"
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </CreateAccountForm>
  )
}

export default CreateAccount
