import React from 'react';
import { useEffect , useState} from "react";
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllRestaurants from './GetAllRestaurants';



const RandomRestaurants = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GetAllRestaurants />

        <Button
          title="Back to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>

    );
  };
  export default RandomRestaurants;
