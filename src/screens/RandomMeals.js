import React from 'react';
import { getUsers } from '../api/mock';
import { setToken } from '../api/token';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllMeals from './GetAllMeals';



const RandomMeals = ({ navigation }) => {
    return (
      <ScrollView snapToInterval={150}>
        <GetAllMeals />
        
        <Button
          title="Back to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
  
    );
  };
  export default RandomMeals;