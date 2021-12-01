import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'


const mainScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Login screen!"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
      <Button title="HomeTemp" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default mainScreen
