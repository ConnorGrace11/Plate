import React from 'react';
import { useEffect , useState} from "react";
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllItems from './getItems';



const RandomItems = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GetAllItems />

        <Button
          title="Back to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>

    );
  };
  export default RandomItems;
