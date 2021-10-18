import React from 'react';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';


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