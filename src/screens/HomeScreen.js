import React from 'react';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllMeals from './GetAllMeals';



const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Go to Meals Screen"
        onPress={() => navigation.navigate('Meals')}
      />
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>

  );
};

export default HomeScreen;