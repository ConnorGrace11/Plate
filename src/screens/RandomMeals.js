import React from 'react';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllMeals from './GetAllMeals';



const RandomMeals = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GetAllMeals />
        
        <Button
          title="Back to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
  
    );
  };
  
  export default RandomMeals;